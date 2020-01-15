const net = require("net");
const { IP, PORT, INITIALS } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Lets do this!");
    conn.write(`Name: ${INITIALS}`);
    // setInterval(() => conn.write("Move: up"), 50);
  });

  conn.on("data", data => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
