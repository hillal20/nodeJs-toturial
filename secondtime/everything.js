// process.nextTick(() => console.log("== process nex tick "));
// console.log("== before next think ");
////////////////////////////////

let promise = new Promise((resFn, rejFn) => {
  setTimeout(() => {
    resFn("== resoled == ");
  }, 3000);
  // rejFn("error");
});
promise
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(err);
  });
console.log("1");
