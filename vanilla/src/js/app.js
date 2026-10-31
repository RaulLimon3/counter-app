const number = document.getElementById('number');
const increaseBtn = document.getElementById('btnIncrease');

let initValue = 0;

increaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    initValue++;
    number.textContent = initValue;
});