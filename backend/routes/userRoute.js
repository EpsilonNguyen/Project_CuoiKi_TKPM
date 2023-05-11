import express from 'express';
import {
    deleteUser,
    getAllUser,
    getUserByEmail,
    lockUser,
    profileUser,
    unlockUser,
    updateUser,
    uploadAvatar,
} from '../controllers/userController.js';
import uploadCloud from '../utils/multerMiddleware.js';
import { verifyToken, verifyUser } from '../utils/verify.js';

const router = express.Router();

// GET PROFILE USER
router.get('/profile/:id', profileUser);

router.get('/get-profile', getUserByEmail);

// GET ALL USER
router.get('/all', getAllUser);

// LOCK USER
router.put('/lock/:userID', lockUser);

// UNLOCK USER
router.put('/unlock/:userID', unlockUser);

// UPDATE USER
router.put('/update/:id', uploadCloud.single('avatar'), updateUser);

// UPLOAD AVATAR
router.put('/uploadAvatar/:id', uploadCloud.single('avatar'), uploadAvatar);

// DELETE USER BY ID
router.delete('/delete/:id', deleteUser);

export default router;
