import axios from "axios";

const API = axios.create({
  baseURL: window.APP_CONFIG.API_URL,
});

export const getTasks = () => API.get("/tasks");

export const createTask = (task) =>
  API.post("/tasks", task);

export const updateTask = (id, task) =>
  API.put(`/tasks/${id}`, task);