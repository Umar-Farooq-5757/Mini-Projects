#!/usr/bin/env node

import { program } from "commander";
import { addTask, deleteTask, editTask, listTasks, toggleTaskStatus } from "../src/commands.js";

program
  .name("tasky")
  .description("A simple CLI tool to manage your daily tasks")
  .version("1.0.0");

// command to add a task
program
  .command("add")
  .description("Add a new task")
  .argument("<task>", "The task description")
  .action((task) => {
    addTask(task);
  });

// command to list all tasks
program
  .command("list")
  .description("List all saved tasks")
  .action(() => listTasks());

// command to edit a task
program
  .command("edit")
  .description("Edit a task")
  .argument("<id>", "The task id")
  .argument("<newDesc>", "Modified task description")
  .action((id, newDesc) => {
    editTask(id, newDesc);
  });

// command to delete a task
program
  .command("delete")
  .description("Delete a task")
  .argument("<id>", "The task id")
  .action((id) => {
    deleteTask(id);
  });

  // command to mark a task as done
program
  .command("done")
  .description("Mark a task as completed")
  .argument("<id>", "The task id")
  .action((id) => {
    toggleTaskStatus(id, true);
  });

// command to mark a task as incomplete
program
  .command("undone")
  .description("Mark a task as incomplete")
  .argument("<id>", "The task id")
  .action((id) => {
    toggleTaskStatus(id, false);
  });

// parse the arguments passed by user
program.parse();
