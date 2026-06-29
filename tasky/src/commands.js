import chalk from "chalk";
import { readTasks, saveTasks } from "./storage.js";

export const addTask = (taskDescription) => {
  const tasks = readTasks();
  tasks.push({ id: tasks.length + 1, task: taskDescription, done: false });
  saveTasks(tasks);
  console.log(chalk.green(`Task added successfully: "${taskDescription}"`));
};

export const listTasks = () => {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log(chalk.red.bold('No tasks found. Type `tasky add "your task"` to create one!'));
    return;
  }
  console.log("\nYour Task List:");
  tasks.forEach((t) => {
    console.log(`${t.id}. [${t.done ? "X" : " "}] ${t.task}`);
    console.log(""); // Extra line for spacing
  });
};

export const editTask = (id, newDesc) => {
  let tasks = readTasks();
  const taskToEdit = tasks.find((t) => t.id == id);
  if (!taskToEdit) {
    console.log(`Task with id:${id} does not exist`);
    return;
  }
  taskToEdit.task = newDesc;
  saveTasks(tasks)
  console.log(`Task with id:${chalk.blue.underline(id)} was successfully edited!`)
};
