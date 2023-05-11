import User from "../models/User.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ email: email });
}

export const createUser = async (newUser) => {
    return await newUser.save();
}

export const createCart = async (newCart) => {
    return await newCart.save();
}