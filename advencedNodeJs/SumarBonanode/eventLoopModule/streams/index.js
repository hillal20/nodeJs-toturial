const fs = require("fs");
const file = fs.createWriteStream("./BigFile.file");

for (let i = 0; i <= 1e6; i++) {
  file.write(" hello students  this is a life streaming ...........");
}
file.end();
