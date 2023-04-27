import { createError } from "../utils/error.js";
import Shoe from "../models/Shoe.js";
import Review from "../models/Review.js";

export const getAllReviewByShoeID = async (req, res, next) => {
    try {
        const shoeID = req.params.shoeID;
        const shoeInfo = await Shoe.findById(shoeID);

        const listReview = await Promise.all(shoeInfo.reviews.map((review) => Review.findById(review)));

        res.status(200).send(listReview);
    } catch (err) {
        next(err);
    }
}

export const updateReview = async (req, res, next) => {
    try {
        const reviewID = req.params.id;
        const updateReview = await Review.findByIdAndUpdate(
            reviewID,
            { $set: req.body },
            { new: true }
        );

        res.status(200).send(updateReview);
    } catch (err) {
        next(err);
    }
}

export const deleteReview = async (req, res, next) => {
    try {
        const reviewID = req.params.id;
        const shoeID = req.params.shoeID;
        const deleteReview = await Review.findByIdAndDelete(reviewID);
        if (!deleteReview) return next(createError(404, "Review muốn xóa không tồn tại!"));

        await Shoe.findByIdAndUpdate(
            shoeID,
            { $pull: { reviews: reviewID } }
        )

        res.status(200).send("Xóa Nhận xét thành công!");
    } catch (err) {
        next(err);
    }
}

export const createReview = async (req, res, next) => {
    try {
        const shoeID = req.params.shoeID;
        const newReview = new Review(req.body);
        const saveReview = await newReview.save();

        await Shoe.findByIdAndUpdate(
            shoeID,
            { $push: { reviews: saveReview._id } }
        )

        res.status(200).send(saveReview);
    } catch (err) {
        next(err);
    }
}