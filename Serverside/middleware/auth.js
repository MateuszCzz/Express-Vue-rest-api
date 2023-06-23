// middleware/auth.js
const jwt = require('jsonwebtoken');


const authenticateToken = (req, res, next) => {

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {

    const decoded = jwt.verify(token, '123'); 
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateToken;
