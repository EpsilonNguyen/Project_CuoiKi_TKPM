import { read } from "fs";
import User from "../models/User.js";
import Cart from "../models/Cart.js";
import Checkout from "../models/Checkout.js";
import Shoe from "../models/Shoe.js";
import { createError } from "../utils/error.js";

export const createCheckout = async (req, res, next) => {
    try {
        const userID = req.params.userID;
        const totalPrice = req.body.totalPrice;
        const listShoeCheckout = req.body.listShoe;
        const listIDShoe = listShoeCheckout.map((shoe) => shoe.id);
        const shipAddress = req.body.shipAddress;

        const listShoe = await Promise.all(listShoeCheckout.map((shoe) => Shoe.findById(shoe.id)));
        for (let i = 0; i < listShoe.length; i++) {
            if (listShoe[i].quantity < listShoeCheckout[i].quantity) {
                return res.status(422).send({
                    success: false,
                    message: "Số lượng sản phẩm trong kho không đủ để đáp ứng nhu cầu của bạn!"
                })
            }
        }

        const userByID = await User.findById(userID);
        if (userByID.wallet < totalPrice) return res.status(422).send({
            success: false,
            message: "Bạn không đủ tiền trong tài khoản để chi trả cho đơn hàng này!"
        })
        // UPDATE WALLET
        userByID.wallet -= totalPrice;
        await userByID.save();

        await Promise.all(listShoeCheckout.map((shoe) =>
            Shoe.findByIdAndUpdate(
                shoe.id,
                {
                    $inc: {
                        sold: shoe.quantity,
                        quantity: - shoe.quantity
                    }
                },
                { new: true }
            )
        ));

        // CART INFO OF USER
        const cartByUser = await Cart.findOne({
            user: userID
        });

        const newCheckout = new Checkout({
            user: userID,
            shoeItem: listShoeCheckout,
            shipAddress: shipAddress,
            total: totalPrice,
            isPaid: true,
            paidAt: new Date().toLocaleString()
        });
        const saveCheckout = await newCheckout.save();

        const newCart = await Cart.findByIdAndUpdate(
            cartByUser._id,
            { $pull: { shoeItem: { id: { $in: listIDShoe } } } },
            { new: true }
        )
        newCart.total = newCart.shoeItem.reduce((acc, cur) => cur.quantity * cur.price, 0);
        await newCart.save();

        res.status(200).send({
            success: true,
            data: saveCheckout
        });
    } catch (err) {
        next(err);
    }
}