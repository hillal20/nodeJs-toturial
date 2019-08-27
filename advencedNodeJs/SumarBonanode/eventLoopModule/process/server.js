const { fork } = require("child_process");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(bodyParser.json());

process.on("message", msg => {
  console.log("msg ==> ", msg);
});

// this code will exit one of the processes automatically
// setTimeout(() => {
//   process.exit(1);
// }, Math.random() * 10000);

server.get("/", (req, res) => {
  res.json({ msg: "api is running ", pid: process.pid });
});

server.get("/data", (req, res) => {
  const child = fork("fetchingData.js");
  child.send("start Fetching");
  child.on("message", msg => {
    res.send(msg.fetchedData);
  });
});

server.get("/calculate", (req, res) => {
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += i;
  }
  res.send({ result, pid: process.pid });
});

server.listen(7000, () => {
  console.log(" server is running on port 7000");
});
