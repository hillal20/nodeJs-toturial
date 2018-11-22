const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(" ==>  hello word \n"); /// we use end to end the stream
  //res.write("==> hello word \n"); /// we use write to keep stream
});

server.listen(9000, () => {
  console.log("== server is running on port 9000 ==");
});
