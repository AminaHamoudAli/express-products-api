const express = require('express');
const router = express.Router();
const { getAllProducts, getSingleProduct } = require('../controllers/productsController');

router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);

module.exports = router;
