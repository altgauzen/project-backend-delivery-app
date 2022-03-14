const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const validateName = (name) => {
  const minLength = 12;
  return name.length >= minLength;
};

const validateEmail = (email) => {
  const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validaEmail.test(email);
};

const validatePassword = (password) => {
  const minLength = 6;
  return password.length >= minLength;
};

const validateRole = (role) => (!!role);

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const putMaskNumber = (num) => num.toFixed(2).replace(/\./, ',');

const removeMaskNumber = (num) => Number(num.replace(',', '.'));

export default {
  setLocalStorage,
  putMaskNumber,
  removeMaskNumber,
  getLocalStorage,
  validateEmail,
  validateName,
  validatePassword,
  validateRole,
};
