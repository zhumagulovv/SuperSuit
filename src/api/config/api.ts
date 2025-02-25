import axios from "axios";

export const apiRoot = axios.create({
  baseURL: "https://5281b9e64c10c525.mokky.dev",
  headers: { "Content-Type": "application/json" },
});
