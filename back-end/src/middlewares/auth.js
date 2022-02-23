
require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const createToken = (payload) => jwt.sign(payload, SECRET);

const validate = (token) => jwt.verify(token, SECRET);

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const Payload = validate(authorization);
    req.user = Payload.payload.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = {
  createToken,
  validateToken,
};


