const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
const showResult = document.getElementById("value");

let counterValue = 0;

decrementValue.addEventListener("click", () => {
    counterValue = counterValue - 1;
    showResult.innerText = counterValue;
})

incrementValue.addEventListener("click", () => {
    counterValue = counterValue + 1;
    showResult.innerText = counterValue;

})

