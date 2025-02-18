const cloudbase = require("@cloudbase/node-sdk");

exports.main = function (event, context) {
  // 调用 TCB 云开发的其他能力请参考: https://docs.cloudbase.net/cbrf/how-to-invoke-tcb
  const app = cloudbase.init({
    env: cloudbase.SYMBOL_CURRENT_ENV,
    context
  });

  return `hello world`;
};
