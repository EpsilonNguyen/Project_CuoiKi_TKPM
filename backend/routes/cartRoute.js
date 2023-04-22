import express from "express";
import { createCart, deleteCart, addShoeItemInCart, deleteShoeItemInCart, getCartByID, updateCart } from "../controllers/cartController.js";

const router = express.Router();

// CREATE
router.post("/new", createCart);

// UPDATE
router.put("/update/:id", updateCart);

// UPDATE CART - ADD SHOE ITEM
router.put("/update/add/:id", addShoeItemInCart);

// UPDATE CART - DELETE SHOE ITEM
router.put("/update/delete/:id/:shoeID", deleteShoeItemInCart);

// DELETE 
router.delete("/delete/:id", deleteCart);

// GET CART BY ID
router.get("/get/:id", getCartByID);

export default router