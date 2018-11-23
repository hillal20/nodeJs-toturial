const http = require("http");
const server = http.createServer();
const fs = require("fs");

const obj = {
  hilal: "aissani"
};

server.on("request", (req, res) => {
  switch (req.url) {
    case "/hilal":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(obj));

    case "/home":
    case "/contact":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(fs.readFileSync(`./${req.url}.html`));
      break;
    case "/":
      res.writeHead(301, { Location: "/home" }); /// redirect
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end();
  }

  res.writeHead(200, { "content-type": "text/plain" });
  res.end(" === hello world \n");
});

server.listen(8000, () => {
  console.log("== server is running on port 8000 === ");
});
