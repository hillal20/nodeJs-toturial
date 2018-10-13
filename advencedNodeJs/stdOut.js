const util = require("util");

// console.log(process.stdout);
process.stdout.write("hello word \n\n\n");

process.stdin.on("data", data => {
  process.stdout.write(`${data}`);

  process.exit();
});
process.on("exit", () => {
  process.stdout.write("\n\n goodby \n \n ");
});
