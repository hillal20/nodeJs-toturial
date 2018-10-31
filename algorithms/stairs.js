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
