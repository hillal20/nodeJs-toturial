let str =
  "The quick brown 020  fox jumped  300 over the 50 lazy dog. It barked.";

// const newArr = [];
// let cIndex = 0;
// let cChar;
// let current = "";
// let count = 0;
// let loopIndex = 0;
// let arrLoopIndex = [];
// let str2 = str;
// // let passed = false;

// for (let i = 0; i < str2.length; i++) {
//   console.log(loopIndex);
//   if (!isNaN(parseInt(str2[i]))) {
//     cIndex = i;

//     while (true) {
//       cChar = str2[cIndex];
//       if (!isNaN(parseInt(cChar))) {
//         cChar = str2[cIndex++];
//         count++;
//         current += cChar;
//         loopIndex += cIndex + count;
//       } else {
//         newArr.push(current);
//         // str2 = str2.slice(loopIndex);

//         count = 0;
//         current = "";
//         cChar = "";
//         cIndex = 0;
//         break;
//       }
//     } // while loop
//   }
//   // loopIndex;

//   // if
// } // for loop
// console.log(newArr);
let indexes = [];
const result = str.match(/[0-9]+/g);
console.log(result);
result.forEach(element => {
  indexes.push([str.indexOf(element), element]);
});

indexes.forEach(element => {
  const x = element[1];

  let x2 = x
    .split("")
    .reverse()
    .join("");
  element[1] = x2;

  str = str.replace(x, element[1]);
  console.log(str);
});
console.log(indexes);
console.log(str);
