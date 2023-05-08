import express from "express";
import {
    createCart,
    deleteCart,
    addShoeItemInCart,
    deleteShoeItemInCart,
    getCartByID,
    updateCart,
    updateQuantityShoeItemInCart,
    getCartByUserID
} from "../controllers/cartController.js";

const router = express.Router();

// CREATE
router.post("/new", createCart);

// UPDATE
router.put("/update/:id", updateCart);

// UPDATE CART - ADD SHOE ITEM
router.put("/update/add/:userID", addShoeItemInCart);

// UPDATE CART - DELETE SHOE ITEM
router.put("/update/delete/:id/:shoeID", deleteShoeItemInCart);

// UPDATE QUANTITY SHOE IN CART
router.put("/update/quantity/:cartID", updateQuantityShoeItemInCart);

// DELETE 
router.delete("/delete/:id", deleteCart);

// GET CART BY ID
router.get("/get/:id", getCartByID);

// GET CART BY USER ID
router.get("/get/user/:id", getCartByUserID);

export default router