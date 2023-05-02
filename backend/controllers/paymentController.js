import { read } from "fs";
import Cart from "../models/Cart.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import paypal from "../utils/paypal.js";

export const paymentConfirm = async (req, res, next) => {
    try {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const amount = req.session.amount;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": amount.total
                }
            }]
        };
        paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                const saveUser = await User.findById(req.session.userID);
                saveUser.wallet += amount.total;
                await saveUser.save();

                req.session.destroy();
                res.status(200).send({
                    success: true,
                    message: 'Giao dịch thành công!',
                    data: payment
                });
            }
        });
    } catch (err) {
        next(err);
    }
}

export const craetePayment = async (req, res, next) => {
    try {
        const new_payment_json = {
            "intent": "authorize",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:8800/shoeshop/api/payment/success",
                "cancel_url": "http://localhost:8800/shoeshop/api/payment/cancel"
            },
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": req.query.totalPrice
                },
                "description": "Nạp tiền vào tài khoản thành công!"
            }]
        };

        paypal.payment.create(new_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                req.session.userID = req.params.id;
                req.session.amount = payment.transactions[0].amount;
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        const href = payment.links[i].href;
                        res.redirect(href);
                    }
                }
            }
        });

    } catch (err) {
        next(err);
    }
}