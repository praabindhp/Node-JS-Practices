const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data Received User ${name} With ID: ${id}`);
});

customEmitter.emit("response", 'Praabindh', 1);