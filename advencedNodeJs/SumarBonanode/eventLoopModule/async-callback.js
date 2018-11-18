const fs = require("fs");
const readFileAsArray = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    }
    const lines = data
      .toString()
      .trim()
      .split("\n");
    cb(null, lines);
  });
};

readFileAsArray("./numbers", (err, lines) => {
  console.log("lines ===> ", lines);
  if (err) throw err;
  const numbers = lines.map(Number);
  console.log("numbers ===> ", numbers);
  const oddNumbers = numbers.filter(number => {
    return number % 2 === 1;
  });
  console.log("===> odd numbers count:", oddNumbers.length);
});
