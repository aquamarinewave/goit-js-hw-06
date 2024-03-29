function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const color = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.innerText = randomColor;
})
