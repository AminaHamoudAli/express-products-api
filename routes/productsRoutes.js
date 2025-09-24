const express = require('express');
const router = express.Router();

const { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

const { getAllProducts, getSingleProduct } = require('../controllers/productsController');

router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);


module.exports = router;
