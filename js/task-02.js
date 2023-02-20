const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const array = [];
for (const ingredient of ingredients){
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  liEl.classList.add('item');
  array.push(liEl);
}
ulEl.append(...array);