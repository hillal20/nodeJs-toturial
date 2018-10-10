const http = require("http");
const fs = require("fs");

console.log("dirname ===>", __dirname);
console.log("dirFile ===>", __filename);

const myReadStream = fs.createReadStream(__dirname + "/sample1.txt", "utf8");
const myWriteStream = fs.createWriteStream(__dirname + "/sample2.txt");

// myReadStream.on("data", chunk => {
//   /// on means create  data event
//   console.log("chunk ==> ", chunk);
//   myWriteStream.write(chunk);
// });

myReadStream.pipe(myWriteStream);
