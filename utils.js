const util = require("util");
const events = require("events");

class Person {
  constructor(name) {
    this.name = name;
  }
}
/////////////////////////////////////////////

util.inherits(Person, events.EventEmitter);

let crazy = new Person("crazy person");
let smart = new Person("smart guy");
let sluggish = new Person("sluggish dud");

//////////////////////////////////////////////////

crazy.on("hello", msg => {
  console.log(crazy.name);
  console.log(msg);
});

crazy.emit("hello", "crazy !!!!!!");
