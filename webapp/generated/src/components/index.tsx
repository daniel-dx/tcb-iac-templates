import React from "react";
import * as _LUCIDE from "lucide-react";
import * as SHADN from "./ui/index";

// eslint-disable-next-line import/no-anonymous-default-export
export const components = new Proxy(SHADN, {
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    }

    return typeof prop === "string"
      ? function (props) {
          React.useEffect(() => {
            console.warn(`component [${prop}] not found`);
          }, []);
          return <div {...props} />;
        }
      : target[prop];
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export const LUCIDE = new Proxy(_LUCIDE, {
  get(target, prop) {
    if (target[prop]) {
      return target[prop];
    }

    return typeof prop === "string"
      ? function (props) {
          React.useEffect(() => {
            console.warn(`icon [${prop}] not found`);
          }, []);
          return null;
        }
      : target[prop];
  },
});
