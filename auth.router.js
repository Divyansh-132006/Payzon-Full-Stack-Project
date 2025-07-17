const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cors = require('cors');

let users = []; // Temporary in-memory user storage

// Signup Route
router.post('/signup', async (req, res) => {
  const { email, password, name, phone } = req.body;

  // Check if user exists
  const existing = users.find(user => user.email === email);
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user object
  const newUser = {
    email,
    password: hashedPassword,
    name,
    phone
  };

  // Add to in-memory user list
  users.push(newUser);
  console.log("📦 Users:", users);

  res.json({ message: "SignUp Successfully" });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  res.json({ message: `Welcome back, ${user.name}!` });
});

module.exports = router;
