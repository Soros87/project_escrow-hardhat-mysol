import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

//this connects client to server side posts
export const fetchEscrow = () => API.get("/escrows");
export const createEscrow = (newEscrow) => API.post("/escrows", newEscrow);
export const fetchApprovedEscrow = (id) => API.get(`/escrows/${id}`);
