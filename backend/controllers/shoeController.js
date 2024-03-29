import { createError } from '../utils/error.js';
import Shoe from '../models/Shoe.js';
import Review from '../models/Review.js';
import cloudinary from '../utils/cloudinary.js';
import Cart from '../models/Cart.js';
export const infoHoyDealByBrand = async (req, res, next) => {
    try {
        const brand = req.params.brandName;
        const hotDeal = await Shoe.find({
            brand: brand,
            sold: { $gt: 0 },
        });
        res.status(200).send({
            success: true,
            total: hotDeal.length,
            data: hotDeal,
        });
    } catch (err) {
        next(err);
    }
};
export const totalHotDealByBrand = async (req, res, next) => {
    try {
        const listBrand = ['Adidas', 'Nike', 'Vans', 'Balenciaga', 'Converse', 'Puma'];
        const hotDeal = await Promise.all(
            listBrand.map((brand) =>
                Shoe.find({
                    brand: brand,
                    sold: { $gt: 0 },
                }),
            ),
        );
        const total = hotDeal.map((deal) => deal.length);
        const result = listBrand.map((brand, index) => {
            return {
                brand: brand,
                total: total[index],
            };
        });

        res.status(200).send({
            success: true,
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

export const shoeHotDeal = async (req, res, next) => {
    try {
        const listHotDeal = await Shoe.find().limit(10).sort({ sold: -1 });
        res.status(200).send({
            success: true,
            data: listHotDeal,
        });
    } catch (err) {
        next(err);
    }
};

export const searchShoe = async (req, res, next) => {
    try {
        const query = req.query.query;
        let resultShoe;
        if (isNaN(query)) {
            resultShoe = await Shoe.find({
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { description: { $regex: query, $options: 'i' } },
                    { brand: query },
                ],
            });
        } else {
            resultShoe = await Shoe.find({
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { description: { $regex: query, $options: 'i' } },
                    { brand: query },
                    { sizes: { $in: [query] } },
                    { price: query },
                ],
            });
        }

        if (!resultShoe.length)
            return res.status(200).send({
                sucess: false,
                message: 'Không có Shoe thõa mãn!',
            });

        res.status(200).send({
            sucess: true,
            total: resultShoe.length,
            data: resultShoe,
        });
    } catch (err) {
        next(err);
    }
};

export const getShoeByPrice = async (req, res, next) => {
    try {
        const listShoe = await Shoe.find({
            price: {
                $gt: req.query.minPrice,
                $lt: req.query.maxPrice,
            },
        });
        res.status(200).send({
            sucess: true,
            total: listShoe.length,
            data: listShoe,
        });
    } catch (err) {
        next(err);
    }
};

export const countShoeByBrand = async (req, res, next) => {
    try {
        const shoeBrand = req.params.brand;
        const listShoeBrand = await Shoe.find({
            brand: shoeBrand,
        });
        res.status(200).send({
            sucess: true,
            total: listShoeBrand.length,
        });
    } catch (err) {
        next(err);
    }
};

export const getShoeByBrand = async (req, res, next) => {
    try {
        const shoeBrand = req.params.brand;
        const listShoeBrand = await Shoe.find({
            brand: shoeBrand,
        });

        if (listShoeBrand.length > 0) {
            res.status(200).send(listShoeBrand);
        } else {
            res.status(200).send('Không có giày thuộc Brand ' + shoeBrand);
        }
    } catch (err) {
        next(err);
    }
};

export const getShoeByID = async (req, res, next) => {
    try {
        const shoeID = req.params.id;
        const shoeInfo = await Shoe.findById(shoeID);

        // TÍNH TỔNG RATING CỦA 1 SHOE
        let averageRating = 0;
        const listReviews = await Promise.all(shoeInfo.reviews.map((review) => Review.findById(review)));
        const totalRating = listReviews.reduce((total, review) => total + review.rating, 0);
        const totalReview = listReviews.length;
        if (totalReview !== 0) {
            averageRating = (totalRating / totalReview).toFixed(2);
        }

        // GÁN GIÁ TRỊ RATING VS TOTAL VÀO THÔNG TIN CỦA SHOE
        const saveShoe = await Shoe.findByIdAndUpdate(
            shoeID,
            {
                $set: {
                    rating: averageRating,
                    numRev: totalReview,
                },
            },
            { new: true },
        );

        res.status(200).send(saveShoe);
    } catch (err) {
        next(err);
    }
};

export const getAllShoe = async (req, res, next) => {
    try {
        const listShoe = await Shoe.find();
        res.status(200).send(listShoe);
    } catch (err) {
        next(err);
    }
};

export const deleteImagesInShoe = async (req, res, next) => {
    try {
        const shoeID = req.params.id;
        // Code để lấy public_id phục vụ cho delete image trên cloudinary
        const public_id = req.body.path.split('/').slice(-2).join('/').replace('.jpg', '');
        const result = await cloudinary.uploader.destroy(public_id);

        if (result.result !== 'ok') return next(createError(404, 'Xóa Hình ảnh thất bại!'));
        await Shoe.findByIdAndUpdate(shoeID, { $pull: { images: req.body.path } });
        res.status(200).send('Xoá Hình ảnh thành công!');
    } catch (err) {
        next(err);
    }
};

export const deleteShoe = async (req, res, next) => {
    try {
        const shoeID = req.params.id;
        const shoeInfo = await Shoe.findById(shoeID);

        // Code để lấy public_id phục vụ cho delete image trên cloudinary
        // const publics_id = shoeInfo.images.map((path) => path.split('/').slice(-2).join('/').replace('.jpg', ''));
        // const result = await cloudinary.api.delete_resources(publics_id);

        // if (Object.values(result.deleted)[0] === 'not_found') return next(createError(404, 'Xóa Hình ảnh thất bại!'));

        await Promise.all(shoeInfo.reviews.map((review) => Review.findByIdAndDelete(review)));

        // CODE XÓA SHOE TRONG CART
        await Cart.updateMany({ shoeItem: { $elemMatch: { id: shoeID } } }, { $pull: { shoeItem: { id: shoeID } } });

        const deleteShoe = await Shoe.findByIdAndDelete(shoeID);
        if (!deleteShoe) return next(createError(404, 'Giày cần xóa không tồn tại!'));

        res.status(200).send('Giày đã được xóa thành công!');
    } catch (err) {
        next(err);
    }
};

export const updateShoe = async (req, res, next) => {
    try {
        const shoeID = req.params.id;

        if (req.files) {
            req.body.images = req.files.map((file) => file.path);
        }

        const saveShoe = await Shoe.findByIdAndUpdate(shoeID, { $set: req.body }, { new: true });

        res.status(200).send(saveShoe);
    } catch (err) {
        next(err);
    }
};

export const createShoe = async (req, res, next) => {
    try {
        // Lấy link ảnh từ Cloudinary (đã upload trc đó)
        req.body.images = req.files.map((file) => file.path);

        const existShoe = await Shoe.findOne({ name: req.body.name })
        if (existShoe) {
            const updatedShoe = await Shoe.findByIdAndUpdate(
                existShoe._id,
                {
                    description: req.body.description,
                    brand: req.body.brand,
                    price: req.body.price,
                    $inc: { quantity: req.body.quantity },
                    sizes: req.body.sizes,
                    images: req.body.images
                },
                { new: true }
            )
            return res.status(200).json(updatedShoe);
        }

        const newShoe = new Shoe(req.body);

        const saveShoe = await newShoe.save();

        res.status(200).json(saveShoe);
    } catch (err) {
        next(err);
    }
};
