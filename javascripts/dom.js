// what does this variable do? 
const domEvents = require('./events');

const outputDiv = document.getElementById('pet-cards');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<h3>${pet.name}</h3>`;
    strang += `<img class="pet-photo" src="${pet.imageUrl}">`;
    strang += `<h4>${pet.color}</h4>`;
    strang += `<p>${pet.specialSkill}</p>`;
    strang += `<h4>${pet.type}</h4>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
};

module.exports = printToDom;
