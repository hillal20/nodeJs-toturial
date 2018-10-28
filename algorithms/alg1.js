/// disjoint set

// const s1 = [1, 2, 3, 4];
// const s2 = [5, 6, 7, 8];
// const s3 = [1, 2, 3, 4, 5, 6, 7, 8];
// if you take 2 numbers and they  belong to the same set , there is a cycle

//////// recursion

const fn = n => {
  let result = 0;
  if (n >= 0) {
    console.log("===>", n);
    result = 1 + fn(n - 1);
  }
  return result;
};
console.log(fn(5));
