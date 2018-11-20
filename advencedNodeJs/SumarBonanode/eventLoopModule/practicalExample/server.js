const event = require("events");
class Server extends event {
  constructor(client) {
    super();
  }
}

module.exports = client => new Server(client);
