import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        require: true
    },
    address: {
        type: String
    },
    birthDay: {
        type: Date,
        require: true
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dtfei3453/image/upload/v1683022384/uploads/avatar_k0ohjl.webp"
    },
    wallet: {
        type: Number,
        default: 0.00
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isLocked: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

export default mongoose.model("User", UserScheme)