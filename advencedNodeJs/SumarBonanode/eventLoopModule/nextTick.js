const fs = require("fs");

const fileSizeFn = (fileName, cb) => {
  if (typeof fileName !== "string") {
    return process.nextTick(cb, new Error("==>filename is not string"), null);
    //return cb(new Error("err ==> filename is not string"), null);
  }
  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, stats.size);
  });
};

fileSizeFn(1, (err, size) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("====>size", size);
});
console.log("===> after code ");
