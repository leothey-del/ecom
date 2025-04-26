const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  fallbackImage: String,
  alt: String,
  slug: String,
})

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;


