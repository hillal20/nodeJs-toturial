const express = require("express");
const server = express();

////// set view engine

server.set("view engine", "ejs");

server.get("/file3", (req, res) => {
  res.render("file3"); /// file3 = file3.ejs = the view
});

server.get("/file4/:name", (req, res) => {
  res.render("file4", { name: req.params.name });
});
//////////////////////////////////

server.get("/", (req, res) => {
  res.send("api is running ");
});

server.get("/contact", (req, res) => {
  res.send("contact is here  ");
});

server.get("/contact/:id", (req, res) => {
  res.send(`${req.params.id} is here and ${req.query.name}  `);
});

server.get("/file1", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/file2", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

server.listen(3000, () => {
  console.log("=== api is running on port 3000 === ");
});
