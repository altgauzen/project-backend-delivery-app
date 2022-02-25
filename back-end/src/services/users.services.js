const Joi = require('joi');
const { user } = require('../database/models');
const { badRequest, conflict, notFound } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandlers');
const { createToken } = require('../middlewares/auth');
console.log('searchingUser->', user)

const schemaUser = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  role: Joi.string().required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const getUserByEmail = async (email) => {
  const response = await user.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
    raw: true,
  });
  return response;
};

const createUser = async (name, email, password, role) => {
  const { error } = schemaUser.validate({ name, email, password, role });
  if (error) throw errorConstructor(badRequest, error.message);
  const userVerifcExist = await getUserByEmail(email);
  if (userVerifcExist) throw errorConstructor(conflict, 'Conflict');
  const createdUserResponse = await user.create({
    name,
    email,
    password,
    role,
  });
  return createdUserResponse;
};

const userLogin = async (email, password) => {
  const { error } = schemaLogin.validate({ email, password });
  if (error) throw errorConstructor(badRequest, error.message);

  const searchingUser = await user.findOne({ where: { email }, raw: true });
  if (!searchingUser || searchingUser.password !== password) {
    throw errorConstructor(notFound, 'Not Found');
  }

  const token = createToken({ payload: searchingUser });
  return token;
};

const getUserAll = async () => {
  const users = await user.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const response = await user.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!response) throw errorConstructor(notFound, 'Not Found');
  return response;
};

module.exports = {
  createUser,
  getUserAll,
  getUserById,
  userLogin,
};
