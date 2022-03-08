const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const putMaskNumber = (num) => num.toFixed(2).replace(/\./, ',');

const removeMaskNumber = (num) => Number(num.replace(',', '.'));

export default { setLocalStorage, putMaskNumber, removeMaskNumber, getLocalStorage };
