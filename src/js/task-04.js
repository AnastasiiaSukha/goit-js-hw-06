
const valueDisplayEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

countedValue();



btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    countedValue()

});
console.log(counterValue);

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    countedValue()
});

function countedValue() {
    valueDisplayEl.textContent = counterValue;
};