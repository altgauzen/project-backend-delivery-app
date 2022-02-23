const { createUser, userLogin } = require('../services/users.services');
const { success, created } = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const { name, email, role, password } = req.body;
    const hash = password;
    const newUser = await createUser(name, email, hash, role);
    return res.status(created).json(newUser);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userLogin(email, password);

    return res.status(success).json({ token });
  } catch (error) {
    console.log(`POST LOGIN -> ${error.message}`);
    next(error);
  }
};
module.exports = { create, login };
