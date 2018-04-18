const loadPets = require('./pets');
const printToDom = require('./dom');

let petArray = [];

const whenPetsLoad = function () {
  petArray = JSON.parse(this.responseText).pets;
  printToDom(petArray);
};

const badPets = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadPets(whenPetsLoad, badPets);
};

module.exports = {
  initializer,
};
