import { createError } from "../utils/error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            fullname: req.body.fullname,
            gender: req.body.gender,
            birthDay: req.body.birthDay,
            password: hash,
        })

        await newUser.save();
        res.status(200).send("Đăng Ký User Mới Thành Công!");
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const resultUser = await User.findOne({ username: req.body.username });
        if (!resultUser) return next(createError(404, "User Không Tồn Tại!"));

        const isLocking = resultUser.isLocked;
        if (isLocking) return next(createError(404, "Tài khoản của bạn đã bị khóa vì một số vấn đề!"));

        const isCorrectPassword = bcrypt.compareSync(req.body.password, resultUser.password); 
        if (!isCorrectPassword) return next(createError(404, "Mật khẩu không chính xác!"));

        const token = jwt.sign({ id: resultUser._id, isAdmin: resultUser.isAdmin }, process.env.JWT);

        const { password, isAdmin, isLocked, ...otherDetails } = resultUser._doc;
        const birthDayFormat = moment(resultUser.birthDay).format('DD-MM-YYYY');
        
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({ birthDayFormat, ...otherDetails });
    } catch (err) {
        next(err);
    }
}