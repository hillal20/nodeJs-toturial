const net = require("net");
const server = net.createServer();
let counter = 0;
let connectedSockets = {};

server.on("connection", socket => {
  /////
  socket.id = counter++;
  /////
  const timestamp = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  /////
  console.log("==   client connecting to server  ");
  /////////
  socket.write(" == server responding to client === \n");
  socket.write(" *** please type your name : \n");
  //////

  socket.on("data", data => {
    if (!connectedSockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`welcome ${socket.name}  \n`);
      connectedSockets[socket.id] = socket;
      return;
    }

    console.log(`data from ${socket.id} is ===>:`, data);
    //////////////
    Object.entries(connectedSockets).forEach(([key, connectedSocket]) => {
      if (socket.id == key) {
        return;
      }
      console.log(key);
      connectedSocket.write(`==> ${socket.name} ${timestamp()}: `);
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
