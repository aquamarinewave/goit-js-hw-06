const listCategories = document.querySelector('#categories');
const itemsCategories = listCategories.querySelectorAll('.item');
const quantityCategories = itemsCategories.length;
console.log('Number of Categories: ' + quantityCategories);
const titleItemCategories = listCategories.querySelectorAll('h2');

for (let i = 0; i < titleItemCategories.length; i += 1) {
    console.log('Category: ' + titleItemCategories[i].outerText);
    console.log('Elements: ' + itemsCategories[i].querySelectorAll('li').length);
}

