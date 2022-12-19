const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul#ingredients');

const listElems = ingredients.map(ingredient => {
  let listElem = document.createElement('li');
  listElem.textContent = ingredient;
  listElem.className = 'item';
  return listElem;
});

listIngredients.append(...listElems);

