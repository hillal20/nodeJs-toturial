const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello word");
    res.end();
  }
  if (req.url === "/api/course") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

////// the server also is an eventlistener
server.on("connection", socket => {
  console.log(" === new connection ===");
});

server.listen(3000, () => {
  console.log("=== server running on 3000 ==== ");
});
