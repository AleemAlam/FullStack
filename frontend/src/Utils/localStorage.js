const loadData = (key) => {
  return localStorage.getItem(key);
};

const saveData = (key, val) => {
  return localStorage.saveData(key, val);
};

export { loadData, saveData };
