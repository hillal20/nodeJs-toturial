const { stat, createReadStream } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const info = promisify(stat);
const file = "./vedio.mp4";

const server = createServer(async (req, res) => {
  const { size } = await info(file);
  console.log(size);
  res.writeHead(200, { "Content-Length": size, "Content-type": "video/mp4" });
  createReadStream(file).pipe(res);
});
server.listen(3000, () => {
  console.log("== server is running on 3000");
});
