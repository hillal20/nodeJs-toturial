const fs = require("fs");
const http = require("http");
const file = "./vedio.mp4";

//////////// //////     using readFile

// const server = http.createServer((req, res) => {
//   fs.readFile(file, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     res.writeHead(200, { "Content-Type": "video/mp4" });
//     res.end(data);
//   });
// });

//////////////////////////////// using createReadStream
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  fs.createReadStream(file)
    .pipe(res)
    .on("error", err => {
      console.log(err);
    });
});
server.on("connection", () => {
  console.log("...connecting");
});
server.listen(3000, () => {
  console.log("==== server runing on 3000");
});
