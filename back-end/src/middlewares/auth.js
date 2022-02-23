// const { translateToken } = require('../utils/handleToken');
// const formatError = require('../utils/formatError');

// module.exports = async (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
    
//     if (!authorization) return res.status(401).send({ message: 'missing auth token' });
    
//     const { data: { id, role, userEmail } } = translateToken(authorization);
//     req.body.userId = id;
//     req.body.role = role;
//     req.body.email = userEmail;
//     next();
//   } catch (error) {
//     next(formatError(401, 'jwt malformed'));
//   }
// };