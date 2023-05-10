import express from 'express';
import {
    countShoeByBrand,
    createShoe,
    deleteImagesInShoe,
    deleteShoe,
    getAllShoe,
    getShoeByBrand,
    getShoeByID,
    getShoeByPrice,
    searchShoe,
    updateShoe,
    infoHoyDealByBrand,
    shoeHotDeal,
    totalHotDealByBrand,
} from '../controllers/shoeController.js';
import uploadCloud from '../utils/multerMiddleware.js';

const router = express.Router();

// CREATE
router.post('/new', uploadCloud.array('images'), createShoe);

// UPDATE
router.put('/update/:id', uploadCloud.array('images'), updateShoe);

// DELETE
router.delete('/delete/:id', deleteShoe);

// DELETE IMAGES IN SHOE
router.delete('/delete/images/:id', deleteImagesInShoe);

// GET
router.get('/:id', getShoeByID);

router.get('/all/item', getAllShoe);

// GET SHOE BY BRAND NAME
router.get('/brand/:brand', getShoeByBrand);

// COUNT SHOE BY BRAND NAME
router.get('/brand/:brand/total', countShoeByBrand);

// GET SHOE BY PRICE : MAX - MIN
router.get('/get/price', getShoeByPrice);

// SEARCH SHOE BY QUERRY
router.get('/all/search', searchShoe);

// HOT DEAL
router.get('/hotdeal/sold', shoeHotDeal);

// TOTAL HOT DEAL BY BRAND
router.get('/hotdeal/brand/total', totalHotDealByBrand);

// DATA HOT DEAL BY BRAND
router.get('/hotdeal/data/:brandName', infoHoyDealByBrand);

// TEST UPLOAD IMAGE
router.post('/test/upload', uploadCloud.array('images'), (req, res, next) => {
    res.status(200).send(req.files);
});

export default router;
