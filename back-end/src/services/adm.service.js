const Joi = require('joi');
const { users } = require('../database/models');
const { badRequest, conflict } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorHandlers');

const schemaUser = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  role: Joi.string().required(),
});

const getUserByEmail = async (email) => {
  const response = await users.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
    raw: true,
  });
  return response;
};

const createADMUser = async (name, email, password, role) => {
  const { error } = schemaUser.validate({ name, email, password, role });
  if (error) throw errorConstructor(badRequest, error.message);
  const userVerifcExist = await getUserByEmail(email);
  if (userVerifcExist) throw errorConstructor(conflict, 'Conflict');
  const createdUserResponse = await users.create({
    name,
    email,
    password,
    role,
  });
  return createdUserResponse;
};

module.exports = {
  createADMUser,
};
