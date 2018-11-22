const dgram = require("dgram");
const server = dgram.createSocket("udp4");

/////////////////// server

server.on("message", (msg, remoteInfo) => {
  console.log("msg ===>", msg);
  console.log("rinfo ===>", remoteInfo);
});

const port = 3333;
const host = "localhost";
server.bind(port, host);

server.on("listening", () => {
  console.log("===> udp  server listening ===");
});

////////// client
const client = dgram.createSocket("udp4");
client.send("pluralsight rocks", port, host, err => {
  if (err) throw err;
  console.log("==> udp message sent === ");
  client.close();
});
