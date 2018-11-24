const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // fs.readFile("./bigFile.file", "utf8", (err, data) => {
  //   if (err) throw err;
  //   //console.log(data);
  //   res.end(data);
  // });

  const file = fs.createReadStream("./bigFile.file");
  file.pipe(res);
});

server.listen(4444, () => {
  console.log("== server is running on port 4444 ==");
});
