import axios from "axios";

export const api = axios.create({
  baseURL: "https://cbf3-182-253-58-213.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
