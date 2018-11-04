const str =
  "The quick brown 020  fox jumped  300 over the 50 lazy dog. It barked.";

const newArr = [];
let cIndex = 0;
let cChar;
let current = "";
let count = 0;
let loopIndex = 0;
let arrLoopIndex = [];
for (let i = 0; i < str.length; i++) {
  if (!isNaN(parseInt(str[i]))) {
    cIndex = i;

    while (true) {
      cChar = str[cIndex];
      if (!isNaN(parseInt(cChar))) {
        cChar = str[cIndex++];
        count++;
        current += cChar;
        loopIndex += cIndex + count;
      } else {
        newArr.push(current);

        count = 0;
        current = "";
        cIndex = 0;

        break;
      }
    } // while loop
  }

  // loopIndex = 0;
  i++;
  // if
} // for loop
console.log(newArr);
console.log(arrLoopIndex);
