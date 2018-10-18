const { stat, createReadStream } = require("fs");
const { createServer } = require("http");
const { promisify } = require("util");
const info = promisify(stat);
const file = "./vedio.mp4";

const server = createServer(async (req, res) => {
  const { size } = await info(file);
  //console.log(size);
  //////////// range
  console.log(req.headers);
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/g, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(206, {
      "Content-range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-type": "video/mp4"
    });
    createReadStream(file, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { "Content-Length": size, "Content-type": "video/mp4" });
    createReadStream(file).pipe(res);
  }
});
server.listen(3000, () => {
  console.log("== server is running on 3000");
});
