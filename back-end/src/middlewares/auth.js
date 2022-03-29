require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: process.env.JWT_ALGORITHM || 'HS256',
};

const SECRET = process.env.JWT_SECRET || 'secret_key';

const createToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const validate = (token) => jwt.verify(token, SECRET);

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const Payload = validate(authorization);
    req.user = Payload.payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = {
  createToken,
  validateToken,
};
