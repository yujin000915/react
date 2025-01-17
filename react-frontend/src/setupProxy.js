// module import -> npm install http-proxy-middleware
// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://3.35.20.58:4000", // 비즈니스 서버 URL 설정
      changeOrigin: true,
      withCredentials: true
    })
  );
};
