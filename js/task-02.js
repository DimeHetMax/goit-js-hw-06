const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')
console.log(ulEl);

for (const ingredient of ingredients){
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  liEl.classList.add('item');
  ulEl.append(liEl);
}