const md5 = require('md5');

const { createUser, userLogin, getUserAll } = require('../services/users.services');
const { success, created } = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, password, role } = req.body;
    const hash = md5(password);
    const newUser = await createUser(name, email, hash, role);
    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATEUSER -> ${error.message}`);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userLogin(email, md5(password));

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
