const util = require("util");
const fs = require("fs");

const delay3 = cb => {
  cb(new Error("?????"), "r1");
  //cb(null, "r1");
};

// delay3((err, msg) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(msg);
//   }
// });

/////////  or by promissify

const promisified = util.promisify(delay3);

promisified()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(err.message);
  });

console.log("r2");

/////////

const writeFile = util.promisify(fs.writeFile);

writeFile("promissified.md", "this is the file")
  .then(msg => {
    console.log("suucesful");
  })
  .catch(err => {
    console.log(err.message);
  });
