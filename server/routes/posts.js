import express from "express";
import { createPost, getPosts } from "../controllers/posts.js"; //remember to add .js - in react we dont need. in express we need
const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:signer", getApprovedPosts);

export default router;
