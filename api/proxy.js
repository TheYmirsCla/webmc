const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'http://dns.webmc.xyz',
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