import express from "express";
import { deleteUser, getAllUser, profileUser, updateUser, uploadAvatar } from "../controllers/userController.js";
import uploadCloud from "../utils/multerMiddleware.js";
import { verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

// GET PROFILE USER
router.get("/profile/:id", profileUser);

// GET ALL USER
router.get("/all", getAllUser);

// UPDATE USER
router.put("/update/:id", verifyToken, verifyUser, uploadCloud.single("avatar"), updateUser);

// UPLOAD AVATAR
router.put("/uploadAvatar/:id", uploadCloud.single("avatar"), uploadAvatar);

// DELETE USER BY ID
router.delete("/delete/:id", deleteUser);

export default router