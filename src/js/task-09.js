
const btnChangeColor = document.querySelector('button.change-color');
const colorName = document.querySelector('span.color');

btnChangeColor.addEventListener('click', onColorChange);

function onColorChange() {

  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
};
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
