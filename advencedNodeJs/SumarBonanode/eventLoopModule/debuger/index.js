const negativeSum = (...args) => {
  return args.reduce((element, acc) => {
    return acc - element;
  }, 0);
};
console.log(negativeSum(1, 5, 10));
//// to activate the debugger run the command ==> node debug index.js
