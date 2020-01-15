const {
  ESCAPE_KEY,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES
} = require("./constants");

let connection;

let handleUserInput = key => {
  // if (key === ESCAPE) {
  //   process.exit();
  // }
  switch (key.toUpperCase()) {
    case ESCAPE_KEY:
      process.exit();
      break;
    case MOVE_UP_KEY:
      connection.write("Move: up");
      break;
    case MOVE_LEFT_KEY:
      connection.write("Move: left");
      break;
    case MOVE_DOWN_KEY:
      connection.write("Move: down");
      break;
    case MOVE_RIGHT_KEY:
      connection.write("Move: right");
      break;
    case "P":
      connection.write(`Say: ${MESSAGES.P}`);
      break;
    case "O":
      connection.write(`Say: ${MESSAGES.O}`);
      break;
    case "I":
      connection.write(`Say: ${MESSAGES.I}`);
      break;
  }
};

let setupInput = conn => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
};

module.exports = { setupInput };
