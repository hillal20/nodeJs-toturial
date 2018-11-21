const net = require("net");
const server = net.createServer();
let counter = 0;
let connectedSockets = {};

server.on("connection", socket => {
  /////
  socket.id = counter++;
  connectedSockets[socket.id] = socket;
  /////
  console.log("==   client connecting to server  ");
  /////////

  socket.write(" == server responding to client === \n");
  socket.on("data", data => {
    console.log(`data from ${socket.id} is ===>:`, data);
    //////////////
    Object.entries(connectedSockets).forEach(([key, connectedSocket]) => {
      connectedSocket.write(`==> ${socket.id}: `);
      connectedSocket.write(data);
    });
  });
  socket.on("end", () => {
    delete connectedSockets[socket.id];
    console.log("==> client is disconnected");
  });
  socket.setEncoding("utf8");
});

server.listen(8000, () => {
  console.log("=== server on port 8000 === ");
});
