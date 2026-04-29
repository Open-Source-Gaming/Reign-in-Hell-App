// Snippet: merge into astro/astro.config.mjs to proxy /api/* to a local Worker (wrangler dev on port 8787).
// Add `devApiProxy` to the `vite.plugins` array of your defineConfig({}) call.

import http from 'node:http';

export const devApiProxy = {
  name: 'dev-api-proxy',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (!req.url?.startsWith('/api')) return next();
      const proxyReq = http.request(
        {
          hostname: 'localhost',
          port: 8787,
          path: req.url,
          method: req.method,
          headers: { ...req.headers, host: 'localhost:8787' },
        },
        (proxyRes) => {
          res.writeHead(proxyRes.statusCode ?? 502, proxyRes.headers);
          proxyRes.pipe(res, { end: true });
        },
      );
      proxyReq.on('error', () => {
        res.writeHead(503, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Worker not running. Start with: make dev-worker' }));
      });
      req.pipe(proxyReq, { end: true });
    });
  },
};
