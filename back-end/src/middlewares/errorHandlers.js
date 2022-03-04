const ErrorHandlers = (err, req, res, _next) => {
  console.log(err, 'errorHandler');
  if (err.status) {
    return res
      .status(err.status)
      .json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = ErrorHandlers;
