const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

// POST: Add multiple products
router.post("/seed", async (req, res) => {
  try {
    await Product.deleteMany({}) // optional: clear existing data
    const products = req.body
    await Product.insertMany(products)
    res.status(201).json({ message: "Products seeded!" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET: Fetch all products
router.get("/", async (req, res) => {
  


  try {
    
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
