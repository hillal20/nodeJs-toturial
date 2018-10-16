const express = require("express");
const server = express();
const { controller } = require("./controllers/todoController.js");
const path = require("path");
const os = require("os");

server.set("view engine", "ejs");
server.use(express.static("./public"));
controller(server);

console.log(os.totalmem());
console.log(os.freemem());

server.listen(4000, () => {
  console.log("== server running on 4000 ===");
});
