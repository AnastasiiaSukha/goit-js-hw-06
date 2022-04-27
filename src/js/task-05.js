
const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value;

    outputEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}