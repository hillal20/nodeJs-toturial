const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(" req-url ==>", req.url);
  res.writeHead(200, { "content-type": "text/plain" });
  //////////////////////////////
  // res.end("hello  ninja");
  /////////////////////////////// using streams
  const myReadStream = fs.createReadStream(__dirname + "/sample1.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "localhost");
console.log("==> listening on port 3000");
