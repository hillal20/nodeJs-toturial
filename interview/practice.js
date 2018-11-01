const fs = require("fs");
const http = require("http");
const util = require("util");
const event = require("events");

// fs.readFile("file1.txt", "utf8", (err, data) => {
//   console.log(data);

//   ///////
//   fs.writeFile("file5.txt", data, () => {
//     console.log("===> done ");
//   });
// });
// //////////////////////////

// const file = fs.readFileSync("file1.txt", "utf8");
// console.log("file==> ", file);
// fs.writeFileSync("file6.txt", file);

//####################################################
//###################################################

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("api is running ");
    res.end("api is runing as well");
  }
});
server.listen(7000, () => {
  console.log(" server is running on port 3000 ");
});

//######################################################
//######################################################

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// util.inherits(Person, event.EventEmitter);

// const hilal = new Person("hilal");

// hilal.on("send", (arg, status) => {
//   console.log(arg.msg);
//   console.log(status);
// });

// hilal.emit("send", { msg: "hello hilal =====" }, 200);

//////////////////////////////////////////
// class Bill extends event {
//   constructor() {
//     super();
//   }
//   fn() {
//     this.emit("hola", { msg: "welcome" }, 200);
//   }
// }

// const bill = new Bill();

// bill.on("hola", (arg, status) => {
//   console.log(arg.msg);
//   console.log(status);
// });

// bill.fn();

// ####################################################################
// ####################################################################

//  fs.mkdirSync("stuf1");
// fs.mkdir("stuf2", err => {
//   console.log("done");
// });

//#########################################

// const readStream = fs.createReadStream(__dirname + "/file1.txt", "utf8");
// const writeStream = fs.createWriteStream(__dirname + "/file4.txt");

// readStream.on("data", chunk => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });
