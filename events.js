const events = require("events");
const myEmitter = new events.EventEmitter();

myEmitter.on("hello", (msg, status) => {
  console.log(msg);
  console.log(status);
});

myEmitter.emit("hello", "message is passed", 200);
