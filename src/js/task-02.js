const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const listOfIngridients = document.querySelector('ul#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  itemEl.classList.add('item');
  
  return itemEl;
})

listOfIngridients.append(...elements);

console.log(listOfIngridients);



