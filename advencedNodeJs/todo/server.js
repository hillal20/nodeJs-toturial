const express = require("express");
const server = express();
const { controller } = require("./controllers/todoController.js");
const path = require("path");

server.set("view engine", "ejs");
server.use(express.static("./public"));
controller(server);

server.listen(4000, () => {
  console.log("== server running on 4000 ===");
});
