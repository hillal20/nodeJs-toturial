const http = require("http");

const server = http.createServer((req, res) => {
  console.log(" req-url ==>", req.url);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello  ninja");
});

server.listen(3000, "localhost");
console.log("==> listening on port 3000");
