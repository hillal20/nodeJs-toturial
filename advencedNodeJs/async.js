// console.log("person1 ticket");
// console.log("person2 ticket");

// const promise = new Promise((resolves, rejects) => {
//   resolves("ticket");
// });
// promise
//   .then(msg => {
//     console.log(`person3 ${msg}`);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// console.log("person4 ticket");
// console.log("person5 ticket");

//////// async await

console.log("person1 ticket");
console.log("person2 ticket");

const asyncFunction = async () => {
  /// async function always return promise

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("person3 ticket");
    }, 3000);
  });

  let person3Ticket = await promise;
  console.log(person3Ticket);
  console.log("person6 ticket");
  console.log("person7 ticket");

  return "person9 ticket";
};
asyncFunction().then(msg => {
  console.log("person8 ticket");
  console.log(msg);
});
console.log("person4 ticket");
console.log("person5 ticket");
