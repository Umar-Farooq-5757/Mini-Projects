// This file handles reading and writing your tasks to a local tasks.json file so your data persists.

import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "tasks.json");

// helper to read tasks
export const readTasks = () => {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data || "[]");
};

// Helper to save tasks
export const saveTasks = (tasks) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};
