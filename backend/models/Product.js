const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    primaryImage: String,
    secondaryImage: String,
    alt: String,
    secondaryAlt: String,
    categorySlug: String,
    type: {
      type: String,
      enum: ['physical', 'digital'], // Restrict to valid values
      default: 'physical', // Optional: set a default
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;