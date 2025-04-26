const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const { category, type, min, max, sort } = req.query;

  try {
    // Build the query object
    let query = {};

    // Filter by category
    if (category) {
      query.categorySlug = category;
    }

    // Filter by type
    if (type) {
      query.type = type;
    }

    // Filter by price range
    if (min || max) {
      query.price = {};
      if (min) {
        const minPrice = Number(min);
        if (!isNaN(minPrice)) query.price.$gte = minPrice;
      }
      if (max) {
        const maxPrice = Number(max);
        if (!isNaN(maxPrice)) query.price.$lte = maxPrice;
      }
    }

    // Validate min <= max
    if (query.price && query.price.$gte && query.price.$lte && query.price.$gte > query.price.$lte) {
      return res.status(400).json({ error: 'Min price cannot be greater than max price' });
    }

    // Execute the query
    let products = Product.find(query);

    // Apply sorting
    if (sort) {
      const [sortField, sortOrder] = sort.split(' ');
      const sortOptions = {};

      if (sortField === 'price') {
        sortOptions.price = sortOrder === 'asc' ? 1 : -1;
      } else if (sortField === 'lastUpdated') {
        sortOptions.updatedAt = sortOrder === 'asc' ? 1 : -1;
      }

      products = products.sort(sortOptions);
    }

    // Fetch the products
    products = await products.exec();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;