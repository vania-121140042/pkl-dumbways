import axios from "axios";

export const api = axios.create({
  baseURL: "https://2cc8-182-253-56-131.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
