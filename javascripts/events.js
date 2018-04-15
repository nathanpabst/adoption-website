const catButton = document.getElementById('cat');
// const dogButton = document.getElementById('dog');
// const dinoButton = document.getElementById('dino');

const showCats = (e) => {
  console.log(e.target.children[0].classList.add('hidden'));
  // e.target.children[].classList.add('hidden');
};

const allAnimalButtons = () => {
  catButton.addEventListener('click', showCats);
  // dogButton.addEventListener('click', showDogs);
  // dinoButton.addEventListener('click', showDinos);
};

module.exports = {
  allAnimalButtons,
};
