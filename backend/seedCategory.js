const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/Category");

dotenv.config();

const category = [
  { id: 1, name: 'Electronics', image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1183428/pexels-photo-1183428.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Electronics Category - Camera', slug: 'electronics' },
  { id: 2, name: 'Fashion', image: 'https://images.pexels.com/photos/159750/open-book-book-pages-literature-159750.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fashion Category - Notebook', slug: 'fashion' },
  { id: 3, name: 'Home & Decor', image: 'https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1098378/pexels-photo-1098378.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Home & Decor Category - Mug', slug: 'home-decor' },
  { id: 4, name: 'Accessories', image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Accessories Category - Watch', slug: 'accessories' },
  { id: 5, name: 'Books', image: 'https://images.pexels.com/photos/159866/book-open-pages-reading-159866.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/481298/pexels-photo-481298.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Books Category', slug: 'books' },
  { id: 6, name: 'Sports', image: 'https://images.pexels.com/photos/1552240/pexels-photo-1552240.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/163498/pexels-photo-163498.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports Category', slug: 'sports' },
  { id: 7, name: 'Toys & Games', image: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Toys & Games Category', slug: 'toys-games' },
  { id: 8, name: 'Beauty', image: 'https://images.pexels.com/photos/1571760/pexels-photo-1571760.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Beauty Category', slug: 'beauty' },
  { id: 9, name: 'Automotive', image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2105500/pexels-photo-2105500.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Automotive Category', slug: 'automotive' },
  { id: 10, name: 'Pet Supplies', image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pet Supplies Category', slug: 'pet-supplies' },
  { id: 11, name: 'Grocery', image: 'https://images.pexels.com/photos/2362804/pexels-photo-2362804.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1437327/pexels-photo-1437327.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grocery Category', slug: 'grocery' },
  { id: 12, name: 'Furniture', image: 'https://images.pexels.com/photos/3416786/pexels-photo-3416786.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2073487/pexels-photo-2073487.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Furniture Category', slug: 'furniture' },
  { id: 13, name: 'Garden', image: 'https://images.pexels.com/photos/4200210/pexels-photo-4200210.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2477585/pexels-photo-2477585.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Garden Category', slug: 'garden' },
  { id: 14, name: 'Health', image: 'https://images.pexels.com/photos/1480405/pexels-photo-1480405.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2325425/pexels-photo-2325425.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Health Category', slug: 'health' },
  { id: 15, name: 'Music', image: 'https://images.pexels.com/photos/358024/pexels-photo-358024.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1305074/pexels-photo-1305074.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Music Category', slug: 'music' },
  { id: 16, name: 'Travel', image: 'https://images.pexels.com/photos/1053183/pexels-photo-1053183.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/1770556/pexels-photo-1770556.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Travel Category', slug: 'travel' },
  { id: 17, name: 'Kitchenware', image: 'https://images.pexels.com/photos/2884914/pexels-photo-2884914.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/2660273/pexels-photo-2660273.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kitchenware Category', slug: 'kitchenware' },
  { id: 18, name: 'Stationery', image: 'https://images.pexels.com/photos/4112257/pexels-photo-4112257.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/4512631/pexels-photo-4512631.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stationery Category', slug: 'stationery' },
  { id: 19, name: 'Shoes', image: 'https://images.pexels.com/photos/1893976/pexels-photo-1893976.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/4147419/pexels-photo-4147419.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Shoes Category', slug: 'shoes' },
  { id: 20, name: 'Watches', image: 'https://images.pexels.com/photos/2907126/pexels-photo-2907126.jpeg?auto=compress&cs=tinysrgb&w=800', fallbackImage: 'https://images.pexels.com/photos/3078067/pexels-photo-3078067.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Watches Category', slug: 'watches' },
 ];


  

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected!");

    // Clear existing products (optional)
    await Category.deleteMany({});
    console.log("Old products removed.");

    // Insert new category
    await Category.insertMany(category);
    console.log("20 new category inserted!");

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error seeding category:", err);
  });
