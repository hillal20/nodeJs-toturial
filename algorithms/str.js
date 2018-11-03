const str =
  "The quick brown 020  fox jumped  300 over the 50 lazy dog. It barked.";

const newArr = [];
let cIndex = 0;
let cChar;
let current = "";
let count = 0;
let loopIndex = 0;
for (let i = 0; i < str.length; i++) {
  if (count > 0 && i < loopIndex) {
    continue;
  }

  if (!isNaN(parseInt(str[i]))) {
    cIndex = i;

    while (true) {
      cChar = str[cIndex++];
      if (!isNaN(parseInt(cChar))) {
        count++;
        current += cChar;
        loopIndex += cIndex + count;
      }

      newArr.push(current);
      if (isNaN(parseInt(cChar))) {
        count = 0;
        current = "";
        cIndex = 0;
        break;
      }
    }
  } // if
} // for loop
console.log(newArr);
