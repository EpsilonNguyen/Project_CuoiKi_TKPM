import { createError } from "../utils/error.js";
import Shoe from "../models/Shoe.js";
import Review from "../models/Review.js";

export const getShoeByBrand = async (req, res, next) => {
    try {
        const shoeBrand = req.params.brand;
        const listShoeBrand = await Shoe.find({
            brand: shoeBrand
        });

        if (listShoeBrand.length > 0) {
            res.status(200).send(listShoeBrand);
        } else {
            res.status(200).send("Không có giày thuộc Brand " + shoeBrand);
        }
    } catch (err) {
        next(err);
    }
}

export const getShoeByID = async (req, res, next) => {
    try {
        const shoeID = req.params.id;
        const shoeInfo = await Shoe.findById(shoeID);
        res.status(200).send(shoeInfo);
    } catch (err) {
        next(err);
    }
}

export const getAllShoe = async (req, res, next) => {
    try {
        const listShoe = await Shoe.find();
        res.status(200).send(listShoe);
    } catch (err) {
        next(err);
    }
}

export const deleteShoe = async (req, res, next) => {
    try {
        const shoeID = req.params.id;

        const shoeInfo = await Shoe.findById(shoeID);
        await Promise.all(shoeInfo.reviews.map((review) => Review.findByIdAndDelete(review)));

        await Shoe.findByIdAndDelete(shoeID);

        res.status(200).send("Giày đã được xóa thành công!");
    } catch (err) {
        next(err);
    }
}

export const updateShoe = async (req, res, next) => {
    try {
        const shoeID = req.params.id;
        const saveShoe = await Shoe.findByIdAndUpdate(
            shoeID,
            { $set: req.body },
            { new: true });

        res.status(200).send(saveShoe);
    } catch (err) {
        next(err);
    }
}

export const createShoe = async (req, res, next) => {
    try {
        const newShoe = new Shoe(req.body);
        const saveShoe = await newShoe.save();

        res.status(200).json(saveShoe);
    } catch (err) {
        next(err);
    }
}