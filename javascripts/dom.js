const domEvents = require('./events');

const outputDiv = document.getElementById('pet-cards');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<div class="col-sm-3">`;
    strang += `<div class="panel">`;
    strang +=  `<div class="panel-heading">`;
    strang +=    `<h3 class="panel-title">${pet.name}</h3>`;
    strang +=  `</div>`;
    strang +=  `<div class="panel-body">`;
    strang +=    `<img class="pet-photo" src="${pet.imageUrl}">`;
    strang +=    `<h4>${pet.color}</h4>`;
    strang +=    `<p>${pet.specialSkill}</p>`;
    strang +=  `<div class="panel-footer">`;
    if (pet.type === 'cat') {
      strang += `<h4 class="cat">${pet.type}</h4>`;
    } else if (pet.type === 'dog') {
      strang += `<h4 class='dog'>${pet.type}</h4>`;
    } else {
      strang += `<h4 class='dino'>${pet.type}</h4>`;
    }
    strang += `</div>`;
    strang +=   `</div>`;
    strang +=    `<h4></h4>`;
    strang +=  `</div>`;
    strang +=  `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
  domEvents.allAnimalButtons();
};

module.exports = printToDom;
