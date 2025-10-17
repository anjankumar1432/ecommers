const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: "redmi", price: 20000 },
  { id: 2, name: "samsung", price: 25000 },
  { id: 3, name: "redmi", price: 30000 },
];


router.get("/products", (req, res) => {
  res.status(200).json(products);
});

router.post("/post1", (req, res) => {
  const { id, name, price } = req.body;

  if (id && name && price) {
    try {
      products.push({ id, name, price });
      res.status(201).send("Added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  } else {
    res.status(400).send("Details not entered correctly");
  }
});

module.exports = router;
