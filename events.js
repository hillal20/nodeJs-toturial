const events = require("events");
const myEmitter = new events.EventEmitter();

// myEmitter.on("hello", (msg, status) => {
//   console.log(msg);
//   console.log(status);
// });

// myEmitter.emit("hello", "message is passed", 200);

//////////////////////////////////// using class //////////

class Bill extends events {
  fn(msg) {
    console.log(msg);
    this.emit("hello world", { id: 2, url: "htpp////" }, 200);
  }
}

const hill = new Bill();

hill.on("hello world", (arg, status) => {
  console.log("arg ==>", arg);
  console.log("status ==>", status);
});

hill.fn("xxxx");
