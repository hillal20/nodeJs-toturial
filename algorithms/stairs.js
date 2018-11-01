const numOfStairs = 3;

const fn = n => {
  let result = 0;

  if (n === 0) {
    return 1;
  }
  if (n - 1 >= 0 || n - 2 >= 0 || n - 3 >= 0) {
    result += fn(n - 1) + fn(n - 2) + fn(n - 3);
  }

  return result;
};

console.log(fn(numOfStairs));

let arr = [1, 2, 3, 4, 10, 4, 5, 9, 8, 9, 30.13, 20];
let num = 20;
let obj = {};
let res;
result = [];

for (let i = 0; i < arr.length; i++) {
  res = num / arr[i];
  obj[i] = true;
  if (obj.hasOwnProperty(res)) {
    result.push(res, arr[i]);
    break;
  }
}
console.log(result);

let arr = [1, 2, 3, 4, 5];
let str = "";
for (let i = 0; i < arr.length; i++) {
  str += arr[i];
}
console.log(parseInt(str) + 1);

let result = [];
let ex = 0;
let arr = [[-2, 3], [1, 1], [3, 8]];
let ind;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] < 0) {
    arr[i][0] *= -1;
  }
  if (arr[i][0] < 0) {
    arr[i][0] *= -1;
  }
  ex = Math.pow(arr[i][0], 2) + Math.pow(arr[i][1], 2);
  console.log(ex);
  result.push(Math.sqrt(ex));
}
ind = result.indexOf(Math.min(...result));
console.log(arr[ind]);
console.log(Math.min(result));
let j;

arr = [1, 2, 3, 4, 5, 6, 9];

// let temp;

for (let i = 0; i < arr.length; i++) {
  j = Math.floor(Math.random() * 10);

  [arr[j], arr[i]] = [arr[i], arr[j]];
}

console.log(
  arr.filter(a => {
    return a !== undefined;
  })
);

console.log(Math.floor(Math.random() * 4));
//////////
