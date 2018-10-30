const fs = require("fs");
const argv = process.argv.slice(2);

console.log("argv ==>", argv);

if (argv.length != 2) {
  console.error("usage: filename capacity");
  process.exit(1);
}

const filename = argv[0];
const capacity = parseInt(argv[1]);

// Read the file
const fileData = fs.readFileSync(filename, "utf8");
// Split the fileData on each new line
const lines = fileData.trim().split(/[\r\n]+/g);

// Process the lines
const items = [];

for (let l of lines) {
  //console.log(lines);
  const [index, size, value] = l.split(" ").map(n => parseInt(n));

  items.push({
    index: index,
    size: size,
    value: value
  });
}

//////////////////////////////////////// iterative ///////

greedyAlo = (items, capacity) => {
  const result = {
    size: 0,
    value: 0,
    chosen: []
  };
  // console.log(items);

  // items = items.filter(item => item.size < capacity);
  items.sort((item1, item2) => {
    const x = item1.value / item1.size;
    const y = item2.value / item2.size;

    return y - x;
  });
  console.log(items);

  for (let i = 0; i < items.length; i++) {
    if (items[i].size <= capacity) {
      // if it is, add it to our final result
      result.size += items[i].size;
      result.value += items[i].value;
      result.chosen.push(items[i].index);
      // don't forget to decrement our total capacity
      capacity -= items[i].size;
    }
  }
  console.log(result);
  return result;
};
greedyAlo(items, capacity);
