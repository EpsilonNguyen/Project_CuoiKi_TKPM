import express from "express";
import { createCheckout, totalAllRevenue, totalRevenueOnMonth } from "../controllers/checkoutController.js";

const router = express.Router();

// CRAETE NEW CHECKOUT
router.post("/:userID", createCheckout);

// GET All REVENUE
router.get("/revenue/all", totalAllRevenue);

// GET REVENUE ON MONTH
router.get("/revenue/month", totalRevenueOnMonth);

export default router