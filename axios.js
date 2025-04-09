// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9191", // ✅ only this, no /api/users here
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
