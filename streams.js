const http = require("http");
const fs = require("fs");
const { readable } = require("stream");

const myReadStream = fs.createReadStream(__dirname + "/sample1.txt", "utf8");
const myWriteStream = fs.createWriteStream(__dirname + "/sample2.txt");

myReadStream.on("data", chunk => {
  ///////////////////////////      on means create  data event
  //console.log("chunk ==> ", chunk);
  const result = myWriteStream.write(chunk); //
  if (!result) {
    // if result = null  means sample2.txt is full
    console.log("....back pressure");
    myReadStream.pause();
  }
});

///////////////
myWriteStream.on("drain", () => {
  console.log("... drained ");
  myReadStream.resume();
});
////////////////////////

myReadStream.on("end", () => {
  console.log("end of stream");
  myWriteStream.end();
});
////////////////////////

myReadStream.on("error", () => {
  console.log("error in stream");
});
/////////////////////////
myWriteStream.on("close", () => {
  process.stdout.write("\n\n\n file copied\n\n ");
});

// myReadStream.pipe(myWriteStream);

////////////////////////////////////////
