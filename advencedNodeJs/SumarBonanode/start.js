// v8  to execute javascript
// chakra  engine power the web browser
// ==>javascript features available in node are in the v8 engine inside node
// this is happens via   3 groups: shipping, staged, in-progress
// ==> libuv is c library for node used to abstract the non-blocking IO operations
// it provide event loop
// ==> node need some dependencies : http-parser , c-ares, openssl, zlib

// node -p process.versions.v8
// node --v8-options | grep "in progress"

const repl = require("repl");
const { config } = require("./util.js");

// repl.start({
//   ignoreUndefined: true,
//   replMode: repl.REPL_MODE_STRICT
// });

//  =====> we can control repl global context

// const replGlobal = repl.start({
//   ignoreUndefined: true,
//   replMode: repl.REPL_MODE_STRICT
// });

// replGlobal.context.lodash = require("lodash");
// console.log(replGlobal);

// =====> global object = (global.process , global.buffer)

// console.log(global.process);
// console.log(global.Buffer);

// console.log(config.port);
// console.log(process.release.lts);

// ===> process

// process.on("exit", () => {
//   console.log("exiting.....");
// });
// process.on("uncaughtException", err => {
//   console.log("err ==>", err.message);
//   process.exit(1);
// });

// process.stdin.resume(); // keep the event loop busy
// console.log("after std.resume()");
// console.dog(); //// ==>  code err

////===>  buffer  = array allocated outside the v8 heap

// const arr1 = Buffer.alloc(8);
// console.log("arr==>1", arr1);

// const arr2 = Buffer.allocUnsafe(8);
// console.log("arr2==> ", arr2);

// const string = "steve";
// const buffer = Buffer.from("steve");
// console.log("string ===> ", string, string.length);
// console.log("buffer==>", buffer, buffer.length);

// example
// const fs = require("fs");

// const conversionMap = {
//   "88": "65",
//   "89": "66",
//   "90": "67"
// };

// fs.readFile(__filename, (err, data) => {
//   console.log(data);
//   let tag = data.slice(-9, -1);
//   console.log(tag);

//   for (let i = 0; i < tag.length; i++) {
//     tag[i] = conversionMap[tag[i]];
//     console.log(data.toString());

//   }
// });
// // tag : xyz

//=====> string_decoder

const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  console.log("chunk===> ", chunk.toString());

  if (chunk != null) {
    const buffer = Buffer.from([chunk]);
    console.log(buffer.toString());
    console.log(decoder.write(buffer));
  }
});
