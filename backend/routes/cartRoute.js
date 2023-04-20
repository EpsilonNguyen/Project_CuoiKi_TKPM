import express from "express";
import { createCart, deleteCart, getCartByID, updateCart } from "../controllers/cartController.js";

const router = express.Router();

// CREATE
router.post("/new", createCart);

// UPDATE
router.put("/update/:id", updateCart);

// DELETE 
router.delete("/delete/:id", deleteCart);

// GET CART BY ID
router.get("/get/:id", getCartByID);

export default router