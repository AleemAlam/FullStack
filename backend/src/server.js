const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userController = require("./controllers/user.controller");
const teacherController = require("./controllers/teacher.controller");
const classController = require("./controllers/class.controller");

app.use("/api/users", userController);
app.use("/api/teacher", teacherController);
app.use("/api/class", classController);
const start = async () => {
  await connect();
  app.listen(3300, () => {
    console.log("Port is listening on 3300");
  });
};

start();
