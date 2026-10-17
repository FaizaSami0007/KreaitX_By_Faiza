const http = require("http");

const REDIRECT_PORT = 3000;
const TARGET_PORT = 3001;

const server = http.createServer((req, res) => {
  const targetUrl = `http://localhost:${TARGET_PORT}${req.url}`;
  
  res.writeHead(302, {
    "Location": targetUrl,
    "Clear-Site-Data": '"cache", "storage", "cookies"',
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  });

  res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting to KreaitX</title>
  <script>
    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(regs) {
          regs.forEach(function(r) { r.unregister(); });
        });
      }
      if ('caches' in window) {
        caches.keys().then(function(keys) {
          keys.forEach(function(k) { caches.delete(k); });
        });
      }
    } catch(e) {}
    window.location.replace("${targetUrl}");
  </script>
</head>
<body style="font-family:sans-serif;padding:40px;text-align:center;">
  <h2>Redirecting to KreaitX Studio...</h2>
  <p><a href="${targetUrl}">Click here if not redirected automatically</a></p>
</body>
</html>`);
});

server.listen(REDIRECT_PORT, () => {
  console.log(`Port ${REDIRECT_PORT} auto-clearing cache and redirecting to http://localhost:${TARGET_PORT}`);
});
