/**
 * 类型完整定义请参考：https://docs.cloudbase.net/cbrf/how-to-writing-functions-code#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B
 * 需要 `pnpm install` 安装依赖后类型提示才会生效
 * 
 * @type {import('@cloudbase/functions-typings').TcbEventFunction<{a: number, b: number}>}
 */
exports.main = function (event, context) {
  const a = event.a;
  const b = event.b;
  return { sum: a + b };
};
