const setStateInLocalStorage = (key, value) => {
  // localStorage.setItem(key, value && btoa(value));
  localStorage.setItem(key, JSON.stringify(value));
};

const getStateFromLocalStorage = (key) => {
  const value = JSON.parse(localStorage.getItem(key));
  // return value && atob(value);
  return value;
};

export const dataHandler = {
  setStateInLocalStorage: (key, value) => setStateInLocalStorage(key, value),
  getStateFromLocalStorage: (key) => getStateFromLocalStorage(key),
};
