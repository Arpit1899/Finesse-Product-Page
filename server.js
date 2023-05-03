const express = require('express');
const app = express();
const cors = require('cors');

const port = 3003;


const products = [
  {
    id: 1,
    title: "Flora Flower Mini Dress",
    price: "$88",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_6572ed78-803a-4120-831b-75424fa95a54_1100x.jpg?v=1682025687",
  },
  {
    id: 2,
    title: "Tiana Pink Ruffle Rosette Dress",
    price: "$46.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-ECOMM-1_c852ff94-f4b9-48fa-a090-dedce54206b5_1100x.jpg?v=1680533372",
  },
  {
    id: 3,
    title: "Kesia Ivory Mini Dress",
    price: "$38.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/Set-Front_3d1fe206-6cff-48db-bb9f-6d2398802260_1100x.jpg?v=1674917029",
  },
  {
    id: 4,
    title: "Mindy Black Mini Dress",
    price: "$48.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/Mindy-Front_1100x.jpg?v=1674915175",
  },
  {
    id: 5,
    title: "Beverly Denim Pleated Skirt",
    price: "$28.00",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Skirt-Front_1100x.png?v=1674912276",
  },
];
app.use(cors());
app.use(express.json());
app.get('/product', (req, res) => {
  res.json(products);
});

app.post('/add-to-favorites', (req, res) => {
  const { id, title, price } = req.body;
  console.log(`Received favorite product: id=${id}, title=${title}, price=${price}`);
  res.json({ message: 'Product added to favorites' });
});
app.post('/cart', (req, res) => {
  console.log('Received cart data:', req.body);
  res.status(201).json({ message: 'Cart updated successfully' });
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});