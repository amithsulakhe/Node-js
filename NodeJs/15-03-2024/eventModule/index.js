const EventEmitter = require("events");

const event = new EventEmitter();

event.on("myName", (status, msg) => {
  console.log("status code is " + status + " and msg is " + msg);
});

event.emit("myName", 200, "ok");
