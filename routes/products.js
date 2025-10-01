// routes/products.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');

// Endpoints
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getSingleProduct);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);


const { protect, adminOnly } = require('./middleware/authMiddleware');
app.post('/api/products', protect, createProduct);
app.delete('/api/products/:id', protect, adminOnly, deleteProduct);

module.exports = router;
