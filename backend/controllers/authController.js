import { createError } from "../utils/error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";
import Cart from "../models/Cart.js";
import { findUserByEmail, createCart, createUser } from "../designpattern/authRepository.js";

export const register = async (req, res, next) => {
    try {
        console.log("req", req.body);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const existUser = await findUserByEmail(req.body.email);
        if (existUser) {
            return res.status(404).send({
                success: false,
                message: "Email đã được đăng ký!"
            })
        };

        const newUser = new User({
            email: req.body.email,
            fullname: req.body.fullname,
            gender: req.body.gender,
            password: hash,
        });

        // const saveUser = await newUser.save();
        const saveUser = await createUser(newUser);
        if (!saveUser) {
            return res.status(404).send({
                success: false,
                message: "Đăng Ký User Mới Không Thành Công!"
            });
        }

        const newCart = new Cart({ user: saveUser._id });
        // await newCart.save();
        await createCart(newCart);

        res.status(200).send({
            success: true,
            message: "Đăng Ký User Mới Thành Công!",
            data: newUser
        });
    } catch (err) {
        next(err);
    }
}

export const loginAdmin = async (req, res, next) => {
    try {
        const resultUser = await findUserByEmail(req.body.email);
        if (!resultUser) return next(createError(404, "User Không Tồn Tại!"));

        const isLocking = resultUser.isLocked;
        if (isLocking) return next(createError(404, "Tài khoản của bạn đã bị khóa vì một số vấn đề!"));

        const isCorrectPassword = bcrypt.compareSync(req.body.password, resultUser.password);
        if (!isCorrectPassword) return next(createError(404, "Mật khẩu không chính xác!"));

        const userIsAdmin = resultUser.isAdmin;
        if (!userIsAdmin) return next(createError(404, "Bạn không phải là Admin!"));

        const token = jwt.sign({ id: resultUser._id, isAdmin: resultUser.isAdmin }, process.env.JWT);

        const { password, isAdmin, isLocked, ...otherDetails } = resultUser._doc;
        const birthDay = moment(resultUser.birthDay).format('DD-MM-YYYY');
        const nowDate = moment(Date.now()).format('DD-MM-YYYY');
        if (birthDay === nowDate) return res.cookie(
            "access_token",
            token,
            {
                httpOnly: true
            }).status(200).send({ ...otherDetails });

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({ birthDay, ...otherDetails });
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const resultUser = await findUserByEmail(req.body.email);
        if (!resultUser) return next(createError(404, "User Không Tồn Tại!"));

        const isLocking = resultUser.isLocked;
        if (isLocking) return next(createError(404, "Tài khoản của bạn đã bị khóa vì một số vấn đề!"));

        const isCorrectPassword = bcrypt.compareSync(req.body.password, resultUser.password);
        if (!isCorrectPassword) return next(createError(404, "Mật khẩu không chính xác!"));

        const token = jwt.sign({ id: resultUser._id, isAdmin: resultUser.isAdmin }, process.env.JWT);

        const { password, isAdmin, isLocked, ...otherDetails } = resultUser._doc;
        const birthDay = moment(resultUser.birthDay).format('DD-MM-YYYY');
        const nowDate = moment(Date.now()).format('DD-MM-YYYY');
        if (birthDay === nowDate) return res.cookie(
            "access_token",
            token,
            {
                httpOnly: true
            }).status(200).send({ ...otherDetails });

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({ birthDay, ...otherDetails });
    } catch (err) {
        next(err);
    }
}