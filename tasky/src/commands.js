import chalk from "chalk";
import { readTasks, saveTasks } from "./storage.js";

export const addTask = (taskDescription) => {
  const tasks = readTasks();
  const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  tasks.push({ id: nextId, task: taskDescription, done: false });
  saveTasks(tasks);
  console.log(chalk.green(`Task added successfully: "${taskDescription}"`));
};

export const listTasks = () => {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log(
      chalk.red.bold(
        'No tasks found. Type `tasky add "your task"` to create one!',
      ),
    );
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
    console.log(chalk.red(`Task with id:${id} does not exist`));
    return;
  }
  taskToEdit.task = newDesc;
  saveTasks(tasks);
  console.log(
    `Task with id:${chalk.blue.underline(id)} was successfully edited!`,
  );
};

export const deleteTask = (id) => {
  const tasks = readTasks();
  const taskToDelete = tasks.find((t) => t.id == id);
  if (!taskToDelete) {
    console.log(`Task with id:${id} does not exist`);
    return;
  }
  const updatedTasks = tasks.filter((t) => t.id != id);
  saveTasks(updatedTasks);
  console.log(
    `Task with id:${chalk.blue.underline(id)} was successfully deleted!`,
  );
};

export const toggleTaskStatus = (id, isDone) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id == id);
  if (!task) {
    console.log(chalk.red(`Task with id:${id} does not exist`));
    return;
  }
  task.done = isDone;
  saveTasks(tasks);
  const statusMessage = isDone
    ? chalk.green("completed [X]")
    : chalk.yellow("incomplete [ ]");
  console.log(`Task ${chalk.blue.underline(id)} marked as ${statusMessage}!`);
};
