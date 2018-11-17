const add = (a, b) => {
  return a + b;
};

const double = x => {
  return add(x, x);
};

const printDouble = y => {
  const result = double(y);
  console.log(result);
};

printDouble(9);
//////

const slowAdd = (a, b) => {
  setTimeout(() => {
    console.log(a + b);
  }, 5000);
  console.log("== after time out == ");
};
slowAdd(3, 4);
slowAdd(10, 20);
