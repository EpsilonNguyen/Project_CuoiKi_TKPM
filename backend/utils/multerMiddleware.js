import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    params: {
        folder: 'uploads'
    }
});

const uploadCloud = multer({ storage });

export default uploadCloud