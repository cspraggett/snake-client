let handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
};

let setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
};

module.exports = { setupInput };
