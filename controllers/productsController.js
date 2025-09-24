
let products = [];
let nextId = 1;

function getAllProducts(req, res) { res.json(products); }

function getSingleProduct(req, res) {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
}

function createProduct(req, res) {
  const product = { id: nextId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
}

function updateProduct(req, res) {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
}

function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
}

module.exports = { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };

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

