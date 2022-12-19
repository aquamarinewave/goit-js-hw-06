const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener("input", (event) => {
    text.style.fontSize = Number(event.currentTarget.value) + "px";
});