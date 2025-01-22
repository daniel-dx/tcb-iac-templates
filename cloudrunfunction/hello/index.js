exports.main = function (event, context) {
  const { httpContext } = context;
  const { url, httpMethod } = httpContext;
  return `hello world [${httpMethod}][${url}] !`;
};
