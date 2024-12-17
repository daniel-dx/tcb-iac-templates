import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useAsyncEffect, useMemoizedFn } from 'ahooks';
import { IPlatformApp, IPlatformSubApp } from '@cloudbase/cals';

import './index.css';

function formatMessage(eventName: string, data: any) {
  return {
    channel: eventName,
    data,
    type: 'request',
  };
}

export const WebPreview = forwardRef(function WebPreview(
  {
    cals,
    sub_cals = [],
    dependencies,
    appId,
    uin,
    envId,
  }: {
    cals: IPlatformApp;
    sub_cals: IPlatformSubApp[];
    dependencies: any;
    appId: string;
    uin: string;
    envId: string;
  },
  ref,
) {
  useAsyncEffect(async () => {}, []);

  const [isReady, setIsReady] = useState(false);
  const iframe = useRef<any>(null);

  useEffect(() => {
    function onMessageHander(event: any) {
      if (event.data.channel === 'preview-iframe-ready') {
        setIsReady(true);
        iframe.current.contentWindow.postMessage(
          formatMessage('dispatch_sandbox', {
            type: 'SET',
            payload: { platform: 'MOBILEWEB' },
          }),
          '*',
        );
      }
    }

    if (iframe.current) {
      window.addEventListener('message', onMessageHander);
    }
    return () => window.removeEventListener('message', onMessageHander);
  }, [iframe.current]);

  /**
   * 更新 sandbox
   */
  const updateSandBox = useMemoizedFn(() => {
    iframe.current.contentWindow.postMessage(
      formatMessage('update_sandbox', {
        cals,
        sub_cals,
        appId,
        dependencies,
        envId,
        force: true,
        mode: 'renderer',
        rootPath: '',
        runtime: 'WEB',
      }),
      '*',
    );
    // reload
    iframe.current.contentWindow.postMessage('reload_sandbox', { pageId: cals.main });
  });

  useEffect(() => {
    if (isReady && cals && dependencies?.length > 0) {
      updateSandBox();
    }
  }, [cals, dependencies, isReady]);

  // 父组件调用属性
  useImperativeHandle(ref, () => ({
    reload: () => {
      console.log('reload sandbox');
      updateSandBox();
    },
  }));

  return (
    <iframe
      className="web-preview-content"
      ref={iframe}
      id="editor-iframe"
      name="editor-iframe"
      allow="microphone;camera;midi;encrypted-media;fullscreen;clipboard-read;clipboard-write"
      src={`https://${appId}.preview.cloudbase.net/preview/isolate?u=${uin}&era=true&mode=production#/${
        cals.main || ''
      }`}
      title="editor-iframe"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads"
    />
  );
});
