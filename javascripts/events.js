const catButton = document.getElementById('cats');
const dogButton = document.getElementById('dogs');
const dinoButton = document.getElementById('dinos');

const showCats = (e) => {
  hideAnimal('dog');
  hideAnimal('dino');
  showAnimal('cat');
};

const showDogs = (e) => {
  hideAnimal('cat');
  hideAnimal('dino');
  showAnimal('dog');
};

const showDinos = (e) => {
  hideAnimal('cat');
  hideAnimal('dog');
  showAnimal('dino');
};

const hideAnimal = (type) => {
  const collection = document.getElementsByClassName(type);
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.add('hidden');
  }
};

const showAnimal = (type) => {
  const collection = document.getElementsByClassName(type);
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove('hidden');
  }
};

const allAnimalButtons = () => {
  catButton.addEventListener('click', showCats);
  dogButton.addEventListener('click', showDogs);
  dinoButton.addEventListener('click', showDinos);
};

module.exports = {
  allAnimalButtons,
};
