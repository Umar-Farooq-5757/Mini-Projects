const express = require("express");
const todoRouter = require("./routes/Todo.routes.js");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/api/todo", todoRouter);

app.listen(3000, () => console.log("server started on port 3000"));
