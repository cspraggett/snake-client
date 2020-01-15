const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Lets do this!");
    conn.write("Name: CJS");
    // setInterval(() => conn.write("Move: up"), 50);
  });

  conn.on("data", data => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
