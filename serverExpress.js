const express = require("express");
const server = express();
const bodyParser = require("body-parser");

// server.use(bodyParser.json());
const bp = bodyParser.urlencoded({ extended: false });
////// set view engine

server.set("view engine", "ejs");

server.use("/assets", express.static("public1"));

server.get("/file3", (req, res) => {
  console.log("===>", req.query);
  res.render("file3", { query: req.query }); /// file3 = file3.ejs = the view
});

server.post("/file3", bp, (req, res) => {
  console.log(" req.body ===>", req.body);
  res.render("succes", { data: req.body }); /// file3 = file3.ejs = the view
});

server.get("/file4/:name", (req, res) => {
  const data = { age: 33, job: "ninja", hobbies: ["eating", "fishing"] };
  res.render("file4", { name: req.params.name, data: data });
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
