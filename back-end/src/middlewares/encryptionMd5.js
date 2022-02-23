const md5 = require('md5');

module.exports = async (req, res, next) => {
  try {
    const { password } = req.body;

    const encryption = md5(password);

    req.body.encryption = encryption;
    next();
  } catch (error) {
    next(error);
  }
};