import { createError } from "../utils/error.js";
import Shoe from "../models/Shoe.js";
import Review from "../models/Review.js";

export const updateReview = async (req, res, next) => {
    try {
        const reviewID = req.params.id;
        const shoeID = req.params.shoeID;
        const updateReview = await Review.findByIdAndUpdate(
            reviewID,
            { $set: req.body },
            { new: true });

        try {
            // UPDATE Rating trong Review ở Shoe
            const updateShoe = await Shoe.findOneAndUpdate(
                { "reviews.id": reviewID },
                {
                    $set: { "reviews.$.rating": updateReview.rating }
                },
                { new: true }
            )
        } catch (err) {
            next(err);
        }

        res.status(200).send(updateReview);
    } catch (err) {
        next(err);
    }
}

export const deleteReview = async (req, res, next) => {
    try {
        const reviewID = req.params.id;
        const shoeID = req.params.shoeID;
        const reviewDelete = await Review.findById(reviewID);
        try {
            const shoeInfo = await Shoe.findById(shoeID);
            const shoeNumRev = shoeInfo.numRev - 1;
            if (!shoeNumRev) {
                await Shoe.findByIdAndUpdate(
                    shoeID,
                    {
                        $pull: { reviews: reviewID },
                        rating: 0,
                        numRev: 0
                    }
                )
            } else {
                const listReviews = await Promise.all(shoeInfo.reviews.map((review) => Review.findById(review)));
                const totalRating = listReviews.reduce((acc, cur) => acc + cur.rating, 0);
                const shoeRating = (totalRating - reviewDelete.rating) / shoeNumRev;

                await Shoe.findByIdAndUpdate(
                    shoeID,
                    {
                        $pull: { reviews: reviewID },
                        rating: shoeRating.toFixed(2),
                        numRev: shoeNumRev
                    }
                )
            }
            await Review.findByIdAndDelete(reviewID);

        } catch (err) {
            next(err);
        }
        // try {
        //     const shoeInfo = await Shoe.findById(shoeID);
        //     const shoeNumRev = shoeInfo.numRev - 1;
        //     const totalRating = shoeInfo.reviews.reduce((acc, cur) => {
        //         return acc + cur.rating
        //     }, 0);

        //     const shoeRating = (totalRating - reviewDelete.rating) / shoeNumRev;

        //     await Shoe.findByIdAndUpdate(
        //         shoeID,
        //         {
        //             $pull: { reviews: { id: reviewID } },
        //             rating: shoeRating.toFixed(2),
        //             numRev: shoeNumRev
        //         }
        //     )
        // } catch (err) {
        //     next(err);
        // }

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

        try {
            const shoeInfo = await Shoe.findById(shoeID);

            const listReviews = await Promise.all(shoeInfo.reviews.map((review) => Review.findById(review)));
            const totalRating = listReviews.reduce((acc, cur) => acc + cur.rating, 0);

            const shoeNumRev = shoeInfo.numRev + 1;
            const shoeRating = (totalRating + saveReview.rating) / shoeNumRev;

            await Shoe.findByIdAndUpdate(
                shoeID,
                {
                    $push: { reviews: saveReview._id },
                    rating: shoeRating.toFixed(2),
                    numRev: shoeNumRev
                }
            )
        } catch (err) {
            next(err);
        }
        // try {
        //     const shoeInfo = await Shoe.findById(shoeID);
        //     const shoeNumRev = shoeInfo.numRev + 1;
        //     const totalRating = shoeInfo.reviews.reduce((acc, cur) => {
        //         return acc + cur.rating
        //     }, 0);

        //     const shoeRating = (totalRating + saveReview.rating) / shoeNumRev;

        //     await Shoe.findByIdAndUpdate(
        //         shoeID,
        //         {
        //             $push: { reviews: { id: saveReview._id, rating: saveReview.rating } },
        //             rating: shoeRating.toFixed(2),
        //             numRev: shoeNumRev
        //         }
        //     )
        // } catch (err) {
        //     next(err);
        // }

        res.status(200).send(saveReview);
    } catch (err) {
        next(err);
    }
}