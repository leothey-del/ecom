const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.use("/api/products", productRoutes)

app.use("/api/categories", categoryRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err))

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
