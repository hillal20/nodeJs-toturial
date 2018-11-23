const http = require("http");

const server = http.createServer({});

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  // res.end(" ==>  hello word \n"); /// we use end to end the stream
  res.write("==> hello word \n"); /// we use write to keep stream
});

server.listen(9000, () => {
  console.log("== server is running on port 9000 ==");
});

// node default  timeout for server is 2 minutes
server.timeout = 5000;

// node http has 5 classes :
// 1* http.server
// 2* http.Agent
// 3* http.IncomingMessage
// 4* http.ServerResponse
// 5* http.ClientRequest
