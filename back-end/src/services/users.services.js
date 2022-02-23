const Joi = require('joi');
const { User } = require('../database/models');
const { badRequest, conflict } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandlers');
const { createToken } = require('../middlewares/auth');

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
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
    raw: true,
  });
  return user;
};

const createUser = async (name, email, password, role) => {
  const { error } = schemaUser.validate({ name, email, password, role });
  if (error) throw errorConstructor(badRequest, error.message);
  const userVerifcExist = await getUserByEmail(email);
  if (userVerifcExist) throw errorConstructor(conflict, 'Conflict');
  const createdUserResponse = await User.create({
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

  const searchingUser = await User.findOne({ where: { email }, raw: true });
  console.log(searchingUser);
  if (!searchingUser || searchingUser.password !== password) {
    throw errorConstructor(badRequest, 'Invalid fields');
  }

  const token = createToken({ payload: searchingUser });

  return token;
};

// const getUserAll = async () => {
//   const users = await User.findAll({ attributes: { exclude: ['password'] } });
//   return users;
// };

// const getUserById = async (id) => {
//   const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
//   if (!user) throw errorConstructor(notFound, 'Not Found');
//   return user;
// };

module.exports = {
  createUser,
  // getUserAll,
  // getUserById,
  userLogin,
};
