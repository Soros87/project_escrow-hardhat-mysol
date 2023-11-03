import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/escrows", postRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}...`);
});
