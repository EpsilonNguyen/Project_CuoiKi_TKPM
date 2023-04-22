import express from "express";
import { createShoe, deleteImagesInShoe, deleteShoe, getAllShoe, getShoeByBrand, getShoeByID, updateShoe } from "../controllers/shoeController.js";
import uploadCloud from "../utils/multerMiddleware.js";

const router = express.Router();

// CREATE
router.post("/new", uploadCloud.array("images"), createShoe);

// UPDATE
router.put("/update/:id", uploadCloud.array("images"), updateShoe);

// DELETE
router.delete("/delete/:id", deleteShoe);

// DELETE IMAGES IN SHOE
router.delete("/delete/images/:id", deleteImagesInShoe);

// GET
router.get("/all", getAllShoe);

router.get("/:id", getShoeByID);

router.get("/brand/:brand", getShoeByBrand);

// TEST UPLOAD IMAGE
router.post("/test/upload", uploadCloud.array("images"), (req, res, next) => {
    res.status(200).send(req.files);
});

export default router