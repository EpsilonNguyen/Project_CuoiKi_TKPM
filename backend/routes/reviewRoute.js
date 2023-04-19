import express from "express";
import { createReview, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();

// CREATE
router.post("/new/:shoeID", createReview);

// UPDATE
router.put("/update/:shoeID/:id",);

// DETELE
router.delete("/delete/:shoeID/:id", deleteReview);

export default router