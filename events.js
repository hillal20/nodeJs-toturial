const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("hello", msg => {
  console.log(msg);
});

myEmitter.emit("hello", "message is passed");
