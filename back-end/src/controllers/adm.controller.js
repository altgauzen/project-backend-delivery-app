const { createADMUser } = require('../services/adm.service');
const { created } = require('../utils/dictionary/statusCode');

const ADMcreateUser = async (req, res, next) => {
  try {
    const { name, email, role, password } = req.body;
    console.log(req.body);
    const hash = password;
    const newUser = await createADMUser(name, email, hash, role);
    console.log("newUser controller ->", newUser);
    return res.status(created).json({ Registros: newUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ADMcreateUser,
};
