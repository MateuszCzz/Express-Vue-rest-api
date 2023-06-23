const jwt = require('jsonwebtoken');

function generateAuthToken(user) {
  const payload = { userId: user._id, name: user.name };
  const secretKey = '123'; 
  const options = { expiresIn: '24h' }; 

  return jwt.sign(payload, secretKey, options);
}

module.exports = { generateAuthToken };
