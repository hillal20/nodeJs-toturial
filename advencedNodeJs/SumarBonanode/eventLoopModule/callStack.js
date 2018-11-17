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
