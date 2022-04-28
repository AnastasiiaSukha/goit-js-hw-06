
const inputEl = document.querySelector('input');
const inputLength = inputEl.dataset.length;


inputEl.addEventListener('blur', onBorderColorChange);

function onBorderColorChange(event) {
    console.log(event.currentTarget.value.trim().length);
    console.log(parseInt(inputLength));
    if (event.currentTarget.value.trim().length === parseInt(inputLength)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    
    };
    
    };
       
    
