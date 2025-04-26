const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Add User
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

// Get Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Delete User
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted" });
});

// Update User (Edit)
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedUser);
});

module.exports = router;
