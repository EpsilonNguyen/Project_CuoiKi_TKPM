import express from "express";
import { deleteUser, updateUser, uploadAvatar } from "../controllers/userController.js";
import uploadCloud from "../utils/multerMiddleware.js";
import { verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

// UPDATE USER
router.put("/update/:id", verifyUser, uploadCloud.single("avatar"), updateUser);

// UPLOAD AVATAR
router.put("/uploadAvatar/:id", uploadCloud.single("avatar"), uploadAvatar);

// DELETE USER BY ID
router.delete("/delete/:id", deleteUser);

export default router