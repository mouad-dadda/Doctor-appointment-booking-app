const storeInLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

const get = (name) => {
  let value = localStorage.getItem(name);
  return value;
};

const remove = (name) => {
  localStorage.removeItem(name);
};

export { storeInLocalStorage, get, remove };
