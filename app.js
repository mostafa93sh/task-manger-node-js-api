const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasks");

app.use("/api/v1/tasks", tasksRouter);

const PORT = 3000;
app.listen(PORT, () => console.log("THE SERVER LISTENING ON 3000 .... "));
