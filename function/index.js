const cloudbase = require("@cloudbase/node-sdk");

exports.main = async (event, context) => {
  // 调用 TCB 云开发的其他能力请参考: https://docs.cloudbase.net/cloud-function/sdk
  const app = cloudbase.init({
    env: cloudbase.SYMBOL_CURRENT_ENV,
  });

  return event;
};
