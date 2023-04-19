import { createError } from "../utils/error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
    try {
        const updateInfo = req.body;
        const salt = bcrypt.genSaltSync(10);
        updateInfo.password  = bcrypt.hashSync(req.body.password, salt);

        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            updateInfo,
            { new: true }
        );

        res.status(200).send(updateUser);
    } catch (err) {
        next(err);
    }
}