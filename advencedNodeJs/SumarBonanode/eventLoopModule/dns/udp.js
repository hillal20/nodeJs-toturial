const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const port = 3333;
const host = "localhost";

/////////////////// server

server.on("message", (msg, remoteInfo) => {
  console.log("msg ===>", msg);
  console.log("rinfo ===>", remoteInfo);
});

server.on("listening", () => {
  console.log("===> udp  server listening ===");
});

server.bind(port, host);

////////// client
const client = dgram.createSocket("udp4");

client.send("pluralsight rocks", port, host, err => {
  if (err) throw err;
  console.log("==> udp message sent === ");
  client.close();
});

/////  we can send buffer
const bufferMsg = Buffer.from("hilal aissani");
client.send(bufferMsg, 0, bufferMsg.length, port, host, err => {
  if (err) throw err;
  console.log("==> udp bufferMessage sent === ");
  client.close();
});
