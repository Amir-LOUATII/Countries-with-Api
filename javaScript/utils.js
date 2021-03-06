// getelement
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`There is no such element: ${selection}, please check`);
};

// set item  to localstorage
function setLocalsorage(key, value) {
  const theValue = JSON.stringify(value);
  window.localStorage.setItem(key, theValue);
}

// get item form local storage

function getLocalstorage(key) {
  const element = JSON.parse(window.localStorage.getItem(key));
  if (element) {
    return element;
  } else return [];
}

export { getElement, setLocalsorage, getLocalstorage };
