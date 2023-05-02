import express from "express";
import { createCheckout } from "../controllers/checkoutController.js";

const router = express.Router();

// CRAETE NEW CHECKOUT
router.post("/:userID", createCheckout);

export default router