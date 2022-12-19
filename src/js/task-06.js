const validationInput = document.getElementById('validation-input');

validationInput.addEventListener("blur", () => { 
    if (validationInput.value.length === Number(validationInput.getAttribute('data-length'))) {
        validationInput.className = "valid";
    } else {
        validationInput.className = "invalid";
    }
});