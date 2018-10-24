const express = require("express");
const server = express();
const path = require("path");
const hdb = require("express-handlebars");

const port = process.env.PORT || 4000;

server.set("views", path.join(__dirname, "views"));
server.engine("handlebars", hdb({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.get("/", (req, res) => {
  res.send("api is running");
});

server.get("/home", (req, res) => {
  res.render("home", { content: "this is some contents", condition: false });
});

server.listen(port, () => {
  console.log("=== server is running on 4000 ==");
});
