const event = require("events");

class Log extends event {
  execute(taskFunc) {
    console.log("===> before executing");
    this.emit("begin");
    taskFunc();
    this.emit("end");
    console.log("===> after executing");
  }
}

const log = new Log();

log.on("begin", () => {
  console.log("==> about to begin to execute");
});

log.on("end", () => {
  console.log("==> end from  execute");
});

log.execute(() => {
  console.log("*** executing ***");
});
