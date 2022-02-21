module.exports = (err, req, res, _next) => {
  //  console.log('NO ERRORHANDLER VEM ERR? \n', err);
  if (err.status) {
    return res
      .status(err.status)
      .json({ message: err.message });
  }

  //  console.error(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};