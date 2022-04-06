const loginCustomer = {
  email: 'carlos@meh.com',
  password: '1234567',
};

const loginWithoutEmail = {
  password: '1234567',
};

const loginIncompleteEmail = {
  email: 'carlos.com',
  password: '1234567',
};

const loginWithoutPassword = {
  email: 'carlos@meh.com',
};

const loginPasswordLessThanSix = {
  email: 'carlos@meh.com',
  password: '1234',
};

module.exports = {
  empty: [],
  loginCustomer,
  loginWithoutEmail,
  loginIncompleteEmail,
  loginWithoutPassword,
  loginPasswordLessThanSix,
};
