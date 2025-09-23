const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');

app.use(express.json());
app.use('/api', productsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
