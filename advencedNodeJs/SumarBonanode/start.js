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
// repl.start({
//   ignoreUndefined: true,
//   replMode: repl.REPL_MODE_STRICT
// });

//  =====> we can control repl global context

const replGlobal = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT
});

replGlobal.context.lodash = require("lodash");
console.log(replGlobal);
