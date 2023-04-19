import express from "express";
import { createShoe } from "../controllers/shoeController.js";

const router = express.Router();

// CREATE
router.post("/new", createShoe);

export default router