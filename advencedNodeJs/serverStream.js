const fs = require("fs");
const http = require("http");
const file = "./sample.txt";

http
  .createServer((req, res) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);
      }
      /////////
      console.log("data ===> ", data);
      ////////////
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log(" server running on port 3000");
  });
