import { createError } from '../utils/error.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import cloudinary from '../utils/cloudinary.js';
import Review from '../models/Review.js';
import Shoe from '../models/Shoe.js';

export const getUserByEmail = async (req, res, next) => {
    try {
        const userByEmail = await User.findOne({ email: req.query.email });
        if (!userByEmail)
            return res.status(200).send({
                success: false,
                message: 'Không tìm thấy!',
            });

        res.status(200).send({
            success: true,
            data: userByEmail,
        });
    } catch (err) {
        next(err);
    }
};

export const unlockUser = async (req, res, next) => {
    try {
        const userID = req.params.userID;

        await User.findByIdAndUpdate(userID, { isLocked: false }, { new: true });

        res.status(200).send({
            success: true,
            message: 'Tài khoản của người dùng đã được mở khóa!',
        });
    } catch (err) {
        next(err);
    }
};

export const lockUser = async (req, res, next) => {
    try {
        const userID = req.params.userID;

        await User.findByIdAndUpdate(userID, { isLocked: true }, { new: true });

        res.status(200).send({
            success: true,
            message: 'Tài khoản của người dùng đã được khóa!',
        });
    } catch (err) {
        next(err);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const listUser = await User.find({ isAdmin: false });

        res.status(200).send({
            success: true,
            data: listUser,
        });
    } catch (err) {
        next(err);
    }
};

export const profileUser = async (req, res, next) => {
    try {
        const userID = req.params.id;
        const profileUser = await User.findById(userID);
        if (!profileUser) {
            return res.status(404).send({
                success: false,
                message: 'Người dùng không tồn tại!',
            });
        }
        res.status(200).send({
            success: true,
            data: profileUser,
        });
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const userInfo = await User.findById(req.params.id);

        // Xóa Avatar trên Cloud
        if (
            userInfo.avatar !==
            'https://res.cloudinary.com/dtfei3453/image/upload/v1683022384/uploads/avatar_k0ohjl.webp'
        ) {
            const publics_id = deleteUser.avatar.split('/').slice(-2).join('/').replace('.jpg', '');
            const result = await cloudinary.uploader.destroy(publics_id);
            if (result !== 'ok') return next(createError(404, 'Xóa Hình ảnh trên Cloud thất bại!'));
        }

        // Xoá All Review của User
        const listReviews = await Review.find({ user: req.params.id });
        await Review.deleteMany({ user: req.params.id });
        await Promise.all(
            listReviews.map((review) =>
                Shoe.updateMany({ reviews: { $elemMatch: { $eq: review._id } } }, { $pull: { reviews: review._id } }),
            ),
        );

        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) return next(createError(404, 'Người dùng không tồn tại!'));

        res.status(200).send({
            success: true,
            message: 'Xóa Người dùng thành công!',
        });
    } catch (err) {
        next(err);
    }
};

export const uploadAvatar = async (req, res, next) => {
    try {
        const pathAvatar = req.file.path;
        const updateUser = await User.findByIdAndUpdate(req.params.id, { avatar: pathAvatar }, { new: true });

        res.status(200).send({
            success: true,
            data: updateUser,
        });
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const updateInfo = req.body;
        if (updateInfo.password) {
            const salt = bcrypt.genSaltSync(10);
            updateInfo.password = bcrypt.hashSync(req.body.password, salt);
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id, updateInfo, { new: true });

        res.status(200).send(updateUser);
    } catch (err) {
        next(err);
    }
};
