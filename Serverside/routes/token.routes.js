const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Route for token validation
router.post('/check-token', (req, res) => {
    const { token } = req.body;
    const secretKey = '123';
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.json({ valid: false });
      }
      const { userId, name } = decoded;
      return res.json({ valid: true, userId, name });
    });
  });
  module.exports = router;