const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasks");
// const mongodbConnect = require("./db/connection");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasksRouter);

// const PORT = 3000;
mongoose
  .connect(`${process.env.Mongo_URL}`)
  .then(() => {
    console.log("CONNECTION ESTABLISH");
  })
  .catch((err) => console.log(err));
app.listen(3000);
// app.listen(PORT, () => console.log("THE SERVER LISTENING ON 3000 .... "));
