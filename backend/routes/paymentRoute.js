import express from "express"
import { craetePayment, paymentConfirm } from "../controllers/paymentController.js";

const router = express.Router();

// CREATE PAYMENT REQUEST
router.post("/:id", craetePayment);

// PAYMENT SUCCESS
router.get("/success", paymentConfirm);

// PAYMENT CANCEL
router.get("/cancel", (req, res, next) => {
    res.status(200).send({
        success: true,
        message: "Hủy bỏ giao dịch!"
    });
})

export default router