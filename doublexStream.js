const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./vedio.mp4");
const writeStream = createWriteStream("./cpy.mp4");

const report = new PassThrough(); // pass through stream does not change the data

//////////////////////
let total = 0;
report.on("data", chunk => {
  total += chunk.length;
  console.log("bytes", total);
});

readStream.pipe(report).pipe(writeStream);
