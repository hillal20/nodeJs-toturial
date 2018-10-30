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
////////////////////////////////////////////////
function memoizedKnapsack(items, capacity) {
  // console.log(items.length, capacity);
  // initalize cache (in this, it will be a matrix)
  const cache = Array(items.length).fill(Array(capacity + 1).fill(null));

  // add the second dimension
  // for (let i = 0; i < items.length; i++) {
  //   cache[i] = Array(capacity + 1).fill(null);
  // }

  function recurseMemo(i, capacityLeft) {
    if (i === -1) {
      return {
        value: 0,
        size: 0,
        chosen: []
      };
    }

    let value = cache[i][capacityLeft];

    if (!value) {
      value = recurseNaive(i, capacityLeft);
      cache[i][capacityLeft] = Object.assign({}, value); // make a copy
    }

    return value;
  }

  function recurseNaive(i, capacityLeft) {
    if (i === -1) {
      return {
        value: 0,
        size: 0,
        chosen: []
      };
    }
    // check to see if the item fits
    else if (items[i].size > capacityLeft) {
      return recurseMemo(i - 1, capacityLeft);
    }
    // Item fits, but might not be worth as much as items in there already
    // But is it worth taking? Does it positively affect our value?
    else {
      // The value we get from not taking the item
      const r0 = recurseMemo(i - 1, capacityLeft); ///
      const r1 = recurseMemo(i - 1, capacityLeft - items[i].size);

      r1.value += items[i].value;

      if (r0.value > r1.value) {
        return r0;
      } else {
        r1.size += items[i].size;
        r1.chosen = r1.chosen.concat(items[i].index);
        return r1;
      }
    }
  }
  return recurseMemo(items.length - 1, capacity);
}
console.log(memoizedKnapsack(items, capacity));
