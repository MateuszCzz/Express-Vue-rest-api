// routes/protectedRoute.js
const express = require('express');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Protected route that requires authentication
router.get('/protected', authenticateToken, (req, res) => {
  // Access the authenticated user from req.user
  const user = req.user;
  res.json({ message: `Welcome, ${user.name}! This is a protected route.` });
});

module.exports = router;
