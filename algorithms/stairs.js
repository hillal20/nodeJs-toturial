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
