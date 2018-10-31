// 'a' === 1
// 'b === 2
// 'c' === 3 ....'z' === 26 , 'ab' === 12

///// my solution

const obj = {};
const al = "abcdefghijklmnrstopquvwxyz";
let k = 0;
for (let i = 0; i < al.length; i++) {
  obj[al[i]] = ++k;
}
console.log(obj);

// const fn = arr => {
//   const result = [];
//   let combination;
//   const helper = (str, newArr) => {
//     for (let i = 0; i < newArr.length; i++) {
//       combination = str + newArr[i];
//       result.push(combination);
//       helper(combination, newArr.slice(i + 1));
//     }
//   };
//   helper("", arr);
//   return result;
// };
// let r = fn("abcdefghijkl");
// console.log(r);
// const res = [];
// let total = 0;
// const data = 3;

// for (let i = 0; i < r.length; i++) {
//   for (let j = 0; j < r[i].length; j++) {
//     total += obj[r[i][j]];
//   }

//   if (total === data) {
//     res.push(r[i]);
//   }
//   total = 0;
// }
// console.log(res);

///////////////////// real solution

const numWays = data => {
  let memo = Array(data.length - 1).fill(null);

  console.log(memo);
  return helper(data, data.length, memo);
};

const helper = (newData, k, memo) => {
  console.log(newData);
  console.log(k);
  console.log(memo);
  //////////////////////////////
  if (k === 0) {
    /// first base case data = ''
    return 1;
  }

  //// second base case data = '011"
  let s;
  s = newData.length - k;
  console.log(s);
  console.log("parseint", parseInt(newData[s] + newData[s + 1]));

  if (newData[s] === "0") {
    return 0;
  }

  if (memo[k] !== null && memo[k] !== undefined) {
    return memo[k];
  }

  let result = 0;
  console.log("result", result);
  result =
    helper(newData, k - 1, memo) +
    (k >= 2 &&
      parseInt(newData[s] + newData[s + 1]) <= 26 &&
      (result += helper(newData, k - 2, memo)));

  result +=
    parseInt(newData[s] + newData[s + 1]) > 26 &&
    (result += helper(newData, k - 1, memo));
  memo[k] = result;

  return result;
};
let d = "273467";
console.log(numWays(d));
