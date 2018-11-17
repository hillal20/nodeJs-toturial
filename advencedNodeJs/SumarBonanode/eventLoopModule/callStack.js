// const add = (a, b) => {
//   return a + b;
// };

// const double = x => {
//   return add(x, x);
// };

// const printDouble = y => {
//   const result = double(y);
//   console.log(result);
// };

// printDouble(9);
// //////

// const slowAdd = (a, b) => {
//   setTimeout(() => {
//     console.log(a + b);
//   }, 3000);

//   console.log("== after time out == ");
// };

// slowAdd(3, 4);
// slowAdd(10, 20);

//==>  i/o in node is used to reference accessing disk and network
//  resources

//==>  thread = program split itself into small threads to  handle tasks

//==>  event loop : the entity handles external events and converts
// them into callbacks invocations
//==> event loop : picks events from the events queue and
// pushes them their callbacks to the call stack

// ==> node starts the event loop automatically when execute a
// code or program (makes the async callbacks possible).
// if there is no code to run , node will exit the event loop

// v8 = heap + stack (objects stored in the heap )

////  ===============> example of blocking code

const slowFn = (a, b) => {
  for (let i = 0; i < 9999999999; i++) {}
  return a + b;
};
const a = slowFn(2, 3);
const b = slowFn(3, 8);
const c = slowFn(9, 10);

console.log(a);
console.log(b);
console.log(c);
console.log("===>  code after ");
