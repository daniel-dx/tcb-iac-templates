exports.main = function (event, context) {
  const a = event.a;
  const b = event.b;
  return { sum: a + b };
};
