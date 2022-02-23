const { createUser, userLogin } = require('../services/users.services');
const { success, created } = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const { name, email, role, encryption } = req.body;
    const hash = encryption;
    const newUser = await createUser(name, email, hash, role);
    return res.status(created).json(newUser);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, encryption } = req.body;
    const token = await userLogin(email, encryption);

    return res.status(success).json({ token });
  } catch (error) {
    console.log(`POST LOGIN -> ${error.message}`);
    next(error);
  }
};
module.exports = { create, login };
