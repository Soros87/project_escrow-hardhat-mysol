import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3100" });

//this connects client to server side posts
export const fetchEscrow = () => API.get("/");
export const createEscrow = (newPost) => API.post("/", newPost);
export const fetchApprovedEscrow = (id) => API.get(`/${id}`);
