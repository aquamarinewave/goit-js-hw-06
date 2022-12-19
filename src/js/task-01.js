const listCategories = document.querySelector('#categories');
const itemsCategories = listCategories.querySelectorAll('.item');
const quantityCategories = itemsCategories.length;
console.log('Number of Categories: ' + quantityCategories);
const titleItemCategories = listCategories.querySelectorAll('h2');

itemsCategories.forEach((item, index) => {
    console.log('Category: ' + titleItemCategories[index].outerText);
    console.log('Elements: ' + item.querySelectorAll('li').length);
});
