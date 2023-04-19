import express from "express";
import { createShoe, deleteShoe, getAllShoe, getShoeByBrand, getShoeByID, updateShoe } from "../controllers/shoeController.js";

const router = express.Router();

// CREATE
router.post("/new", createShoe);

// UPDATE
router.put("/update/:id", updateShoe);

// DELETE
router.delete("/delete/:id", deleteShoe);

// GET
router.get("/all", getAllShoe);

router.get("/:id", getShoeByID);

router.get("/brand/:brand", getShoeByBrand);

export default router