import mongoose from "mongoose";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const avatar_default = fs.readFileSync(path.join(__dirname,'../public/images/avatardefault.jpg'));

const UserScheme = new mongoose.Schema ({
    username: {
        type: String,
        require: true,
        unique: true
    },
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
        enum: ["Nam", "Nữ", "Khác"],
        require: true
    },
    birthDay: {
        type: Date,
        require: true
    },
    avatar: {
        type: String,
        default: "../public/images/avatardefault.jpg"
    },
    wallet: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
  default: false
    },
    isLocked: {
        type: Boolean,
        default: false
    }}, 
    {timestamps: true}
)

export default mongoose.model("User", UserScheme)