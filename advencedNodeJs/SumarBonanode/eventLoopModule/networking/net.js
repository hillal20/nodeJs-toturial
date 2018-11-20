const net = require("net");
const server = net.createServer();
server.on("connection", socket => {
  console.log("==  dear server i am the client  ");
  socket.write(" == server is saying welcome to client === \n");
  socket.on("data", data => {
    console.log("data is ===>:", data);
    socket.write(data);
  });
  socket.setEncoding("utf8");
});

server.listen(8000, () => {
  console.log("=== server on port 8000 === ");
});
