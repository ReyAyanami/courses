//utils.js
const sortStrings = (a, b) => {
  if(a === b) {
    return 0;
  }
  if(a < b) {
    return -1;
  } else {
    return 1;
  }
}

const sortNumbers = (a, b) => a - b;

const findByName = name => person => person.name === name;

module.exports = {
  sortStrings,
  sortNumbers,
  findByName
}
