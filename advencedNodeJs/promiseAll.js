const fs = require("fs");
const util = require("util");
const promisify = util.promisify;
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);

// const beep = () => {
//   process.stdout.write("\nx0009\n");
// };
// // beep();

////////////////////
const delay = seconds => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved1");
    }, seconds * 1000);
  });
};
// delay(3).then(console.log);

/////////////// create fills via promise.all

// Promise.all([
//   writeFile("f1.txt", "hola1"),
//   writeFile("f1.md", "holla2"),
//   writeFile("f1.json", '{"hello": "world" }')
// ])
//   .then(msg => {
//     return readdir(__dirname);
//   })
//   .then(msg => {
//     console.log(msg);
//   });
//////////////////// remove files via promise.all

Promise.all([unlink("f1.txt"), unlink("f1.md"), delay(3), unlink("f1.json")])
  .then(msg => {
    return readdir(__dirname);
  })
  .then(msg => {
    console.log(msg);
  });
