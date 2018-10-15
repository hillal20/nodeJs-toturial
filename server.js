const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(" req-url ==>", req.url);
  res.writeHead(200, { "content-type": "text/html" });
  //res.writeHead(200, { "content-type": "text/plain" });
  //////////////////////////////
  // res.end("hello  ninja");
  /////////////////////////////// using streams
  //const myReadStream = fs.createReadStream(__dirname + "/sample1.txt", "utf8");
  const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

// const server = http.createServer((req, res) => {
//   console.log(" req-url ==>", req.url);

////////////////////////////////////////////////////
//   if (req.url === "/home") {
//     res.writeHead(200, {
//       "content-type": "text/html"
//     });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact") {
//     res.writeHead(200, {
//       "content-type": "text/html"
//     });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else {
//     res.writeHead(200, { "content-type": "application/json" });
//     const obj = { name: "hilal", job: "driver", age: 33 };

//     res.end(JSON.stringify(obj));
//   }
// });

server.listen(3000, () => {
  console.log("==> listening on port 3000");
});
