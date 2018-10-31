const numOfStairs = 5;
const fn = n => {
  if (n <= 0) {
    return 1;
  }

  return 1 + fn(n - 1) + fn(n - 2) + fn(n - 3);
};

console.log(fn(numOfStairs));
