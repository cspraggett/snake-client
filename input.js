let connection;

let handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  switch (key.toLowerCase()) {
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "p":
      connection.write("Say: meep meep");
      break;
    case "o":
      connection.write("Say: HI!");
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
