const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasks");
// const mongodbConnect = require("./db/connection");
require("dotenv").config();
const mongoose = require("mongoose");

app.use("/api/v1/tasks", tasksRouter);

// const PORT = 3000;
mongoose.connect(`${process.env.Mongo_URL}`, () => {
  console.log("connection establish");

  app.listen(3000);
});
// app.listen(PORT, () => console.log("THE SERVER LISTENING ON 3000 .... "));
