import express from "express";
import { updateUser } from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verify.js";

const router = express.Router();

// UPDATE USER
router.put("/:id", verifyUser, updateUser);

export default router