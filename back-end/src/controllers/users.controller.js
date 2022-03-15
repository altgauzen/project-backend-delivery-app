const {
  createUser,
  userLogin,
  getUserAll,
  getUserById,
} = require('../services/users.service');
const { success, created } = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const { name, email, role = 'customer', password } = req.body;
    const hash = password;
    const newUser = await createUser(name, email, hash, role);
    delete newUser.dataValues.role;
    return res.status(created).json({ Registros: newUser });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await userLogin(email, password);

    return res.status(success).json(data);
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

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.status(success).json(user);
  } catch (error) {
    console.log(`GET USER BY ID -> ${error.message}`);
    next(error);
  }
};

module.exports = {
  create,
  login,
  getAllUsers,
  getById,
};
