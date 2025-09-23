let products = [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' }
];

const getAllProducts = (req, res) => {
    res.json(products);
};

const getSingleProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
};

module.exports = { getAllProducts, getSingleProduct };
