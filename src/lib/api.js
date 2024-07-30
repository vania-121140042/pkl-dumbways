import axios from "axios";

export const api = axios.create({
  baseURL: "https://c892-2404-8000-1005-6a1f-8806-7280-375-233e.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});
