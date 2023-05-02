import { createError } from "../utils/error.js";
import Cart from "../models/Cart.js";
import User from "../models/User.js";

export const addShoeItemInCart = async (req, res, next) => {
    try {
        const userID = req.params.userID;
        const shoeID = req.body.id;
        // CHECK CART
        const cartExist = await Cart.findOne({ user: userID });
        if (!cartExist) return next(createError(404, "Giỏ hàng không tồn tại!"));

        const shoeExist = await Cart.findOne(
            {
                _id: cartExist._id,
                shoeItem: { $elemMatch: { id: shoeID } }
            }
        );
        // ADD ITEM
        let addItem = null;
        if (shoeExist) {
            addItem = await Cart.findOneAndUpdate(
                { _id: cartExist._id, shoeItem: { $elemMatch: { id: shoeID } } },
                { $set: { "shoeItem.$": req.body } },
                { new: true }
            );
        } else {
            addItem = await Cart.findByIdAndUpdate(
                cartExist._id,
                { $push: { shoeItem: req.body } },
                { new: true }
            );
        }

        if (!addItem) return next(createError(404, "Thêm Giày vào Giỏ hàng thất bại!"));

        res.status(200).send("Thêm Giày vào Giỏ hàng thành công!");
    } catch (err) {
        next(err);
    }
}

export const deleteShoeItemInCart = async (req, res, next) => {
    try {
        const cartID = req.params.id;
        const shoeID = req.params.shoeID;
        const cartExist = await Cart.findById(cartID);
        if (!cartExist) return next(createError(404, "Giỏ hàng không tồn tại!"));

        const deleteItem = await Cart.findByIdAndUpdate(
            cartID,
            { $pull: { shoeItem: { id: shoeID } } },
            { new: true }
        );

        if (!deleteItem) return next(createError(404, "Giày muốn xóa, không tồn tại trong Giỏ hàng!"));

        res.status(200).send("Xóa Giày ra khỏi Giỏ hàng thành công!");
    } catch (err) {
        next(err);
    }
}

export const getCartByID = async (req, res, next) => {
    try {
        const cartID = req.params.id;
        const cartExist = await Cart.findById(cartID);

        if (!cartExist) return next(createError(404, "Giỏ hàng không tồn tại!"));

        res.status(200).send(cartExist);
    } catch (err) {
        next(err);
    }
}

export const deleteCart = async (req, res, next) => {
    try {
        const cartID = req.params.id;
        const cartExist = await Cart.findById(cartID);

        if (!cartExist) return next(createError(404, "Giỏ hàng không tồn tại!"));

        await Cart.findByIdAndDelete(cartID);
        res.status(200).send("Xóa Giỏ hàng thành công!");
    } catch (err) {
        next(err);
    }
}

export const updateCart = async (req, res, next) => {
    try {
        const cartID = req.params.id;
        const cartExist = await Cart.findById(cartID);

        if (!cartExist) return next(createError(404, "Giỏ hàng không tồn tại!"));

        const saveCart = await Cart.findByIdAndUpdate(
            cartID,
            { $set: req.body },
            { new: true }
        );

        res.status(200).send(saveCart);
    } catch (err) {
        next(err);
    }
}

export const createCart = async (req, res, next) => {
    try {
        const userExist = await User.findById(req.body.user);
        if (!userExist) return next(createError(404, "Người dùng không tồn tại!"));

        const cartExist = await Cart.findOne({ user: req.body.user });
        if (cartExist) return next(createError(404, "Người dùng đã có Giỏ hàng!"));

        const newCart = new Cart(req.body);
        const saveCart = await newCart.save();
        res.status(200).send(saveCart);
    } catch (err) {
        next(err);
    }
}