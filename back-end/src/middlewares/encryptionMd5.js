const md5 = require('md5');

const encryption = async (req, res, next) => {
  try {
    const { password } = req.body;

    const encryption = md5(password);

    req.body.password = encryption;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = encryption;
