const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  const listElem = document.createElement('li');
  listElem.textContent = ingredients[i];
  listElem.className = 'item';
  listIngredients.append(listElem);
}

