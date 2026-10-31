const number = document.getElementById('number');
const increaseBtn = document.getElementById('btnIncrease');
const decreaseBtn = document.getElementById('btnDecrease');
const resetBtn = document.getElementById('btnReset');

let initValue = 0;

increaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    initValue++;
    number.textContent = initValue;
});

decreaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    initValue--;
    number.textContent = initValue;
});

resetBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    initValue = 0;
    number.textContent = initValue
});