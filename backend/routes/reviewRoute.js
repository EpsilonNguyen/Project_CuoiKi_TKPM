import express from "express";
import { createReview, deleteReview, getAllReviewByShoeID, updateReview } from "../controllers/reviewController.js";

const router = express.Router();

// CREATE
router.post("/new/:shoeID", createReview);

// UPDATE
router.put("/update/:id", updateReview);

// DETELE
router.delete("/delete/:shoeID/:id", deleteReview);

// GET ALL REVIEW BY SHOE ID
router.get("/getAll/:shoeID", getAllReviewByShoeID);

export default router