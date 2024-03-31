const STORAGE_KEY = 'notes';

function add(formValues) {
  const newArray = getAll();
  newArray.push(formValues);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newArray));
}

function getAll() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export const localStorageAPI = {
  add,
  getAll,
};
