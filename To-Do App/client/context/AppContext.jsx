import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [todoValue, setTodoValue] = useState("");
  const [mode, setMode] = useState("creating");
  const [todos, setTodos] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskIsCompleted, setEditTaskIsCompleted] = useState(false);

  useEffect(() => {
    axios
      .get("/api/todo/all")
      .then((res) => {
        setTodos(res.data.todos);
        console.log("Data:", res.data);
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  }, []);

  const getAllTodos = () => {
    axios
      .get("/api/todo/all")
      .then((res) => {
        setTodos(res.data.todos);
        console.log("Data:", res.data);
        console.log("ye cheez");
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  };

  const postTodo = () => {
    axios
      .post("/api/todo/create", { text: todoValue })
      .then((res) => {
        console.log("Secure POST successful:", res);
        setTodoValue("");
        getAllTodos()
      })
      .catch((err) => {
        console.error("Secure POST failed:", err);
      });
  };

  const editTodo = () => {
    if (!editTaskId) {
      console.error("No task ID set for editing.");
      return;
    }

    axios
      .put(`/api/todo/edit/${editTaskId}`, {
        text: todoValue,
        isCompleted: editTaskIsCompleted,
      })
      .then((res) => {
        getAllTodos()
        console.log(res);
        setEditTaskId(null);
        setEditTaskIsCompleted(false);
        setTodoValue("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteTodo = (id) => {
    axios({
      method: "delete",
      url: `/api/todo/delete/${id}`,
    })
      .then((res) => {
        getAllTodos()
        console.log(`User deleted. Status: ${res.status}`);
      })
      .catch((err) => {
        console.error("Deletion failed:", err);
      });
  };
  const value = {
    todoValue,
    setTodoValue,
    mode,
    setMode,
    todos,
    setTodos,
    getAllTodos,
    postTodo,
    editTodo,
    deleteTodo,
    setEditTaskId,
    editTaskIsCompleted,
    setEditTaskIsCompleted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
