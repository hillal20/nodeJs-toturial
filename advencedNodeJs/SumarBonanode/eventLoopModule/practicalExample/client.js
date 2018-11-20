const event = require("events");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const client = new event();
const server = require("./server")(client);
server.on("response", resp => {
  console.log(`resp ===>', ${resp}`);
});

rl.on("line", input => {
  client.emit("command", input);
  //console.log("input ===>:", input);
});
