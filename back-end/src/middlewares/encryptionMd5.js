const md5 = require('md5');

const encryption = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hash = md5(password);

    req.body.password = hash;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryption;
