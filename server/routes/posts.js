import express from "express";
import {
  getEscrows,
  createEscrow,
  getApprovedEscrows,
} from "../controllers/posts.js"; //remember to add .js - in react we dont need. in express we need

const router = express.Router();

router.post("/", createEscrow);
router.get("/", getEscrows);
router.get("/:signer", getApprovedEscrows);

export default router;
