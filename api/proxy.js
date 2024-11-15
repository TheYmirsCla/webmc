const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: '157.173.96.135:45720',
  changeOrigin: true,
  ws: true,
});

module.exports = (req, res) => proxy(req, res);

module.exports.config = {
  api: {
    bodyParser: false,
  },
  onRequest: (req, socket, head) => proxy.upgrade(req, socket, head),
};
