const express = require("express");
const cors = require("cors");
const DBConnect = require("./utils/db.connection");
const user_route = require("./routers/user.route");

DBConnect()
  .then((isConnected) => {
    console.log({ isConnected });
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1/users", user_route);
    app.listen(3001, () => console.log("server is running on port 3001"));
  })
  .catch((err) => {
    console.log({ err });
    process.exit(-1);
  });
