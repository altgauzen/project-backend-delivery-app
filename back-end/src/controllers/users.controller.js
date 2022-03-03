const { createUser, userLogin, getUserAll } = require('../services/users.services');
const { success, created } = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const { name, email, role = 'customer', password } = req.body;
    const hash = password;
    const newUser = await createUser(name, email, hash, role);
    console.log(newUser)
    delete newUser.dataValues.role
    return res.status(created).json({ Registros: newUser });
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

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await getUserAll();
    return res.status(success).json(users);
  } catch (error) {
    console.log(`GET USERS -> ${error.message}`);
    next(error);
  }
};

module.exports = { create, login, getAllUsers };
