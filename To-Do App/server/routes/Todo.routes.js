const express = require("express");
const todoRouter = express.Router();
const db = require("../config/db.js");

// Get all todos;
todoRouter.get("/all", async (req, res) => {
  try {
    const [todos] = await db.execute("SELECT * FROM tasks_fullstack");
    if (!todos) {
      return res.json({ success: false, message: "Cannot get todos" });
    }
    res.json({ success: true, todos });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
});

// Create a todo
todoRouter.post("/create", async (req, res) => {
  try {
const text = req.body.text;
if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ success: false, message: "Task text is required." });
}
    const todo = await db.execute(
      `INSERT INTO tasks_fullstack (task_id, text, author, isCompleted) VALUES(?,?,?,?)`,
      [
        crypto.randomUUID(),
        text,
        "fcfd64e1-6de5-4936-a612-fd1bf0b69218",
        false,
      ]
    );
    
    res.json({ success: true, todo });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
});

module.exports = todoRouter;
