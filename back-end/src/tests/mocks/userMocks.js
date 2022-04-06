const customer = {
  name: 'Carlos Cachaça',
  email: 'carlos@meh.com',
  password: '1234567',
  role: 'customer',
};

const seller = {
  name: 'Zé Vendinha',
  email: 'comprebatom@cervejariadonatereza.com',
  password: '1234567',
  role: 'seller',
};

const withoutName = {
  email: 'carlos@meh.com',
  password: '1234567',
  role: 'customer',
};

const nameLessThenTwelve = {
  name: 'Zé',
  email: 'carlos@meh.com',
  password: '1234567',
  role: 'customer',
};

const withoutEmail = {
  name: 'Carlos Cachaça',
  password: '1234567',
  role: 'customer',
};

const incompleteEmail = {
  name: 'Carlos Cachaça',
  email: 'carlos.com',
  password: '1234567',
  role: 'customer',
};

const withoutPassword = {
  name: 'Carlos Cachaça',
  email: 'carlos@meh.com',
  role: 'customer',
};

const passwordLessThanSix = {
  name: 'Carlos Cachaça',
  email: 'carlos@meh.com',
  password: '1234',
  role: 'customer',
};

const withoutRole = {
  name: 'Carlos Cachaça',
  email: 'carlos@meh.com',
  password: '1234567',
};

const inserted = {
  name: "Carlos Cachaça",
  email: 'carlos@meh.com',
  password: 'e10adc3949ba59abbe56e057f20f883e',
  role: 'customer'
};

module.exports = {
  empty: [],
  customer,
  nameLessThenTwelve,
  seller,
  withoutName,
  withoutEmail,
  incompleteEmail,
  withoutPassword,
  passwordLessThanSix,
  withoutRole,
  inserted,
};
