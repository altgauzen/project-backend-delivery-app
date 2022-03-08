const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const putMaskNumber = (num) => num.toFixed(2).replace(/\./, ',');

const removeMaskNumber = (num) => Number(num.replace(',', '.'));

export default { setLocalStorage, putMaskNumber, removeMaskNumber };
