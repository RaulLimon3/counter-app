const number = document.getElementById('number');
const increaseBtn = document.getElementById('btnIncrease');
const decreaseBtn = document.getElementById('btnDecrease');
const resetBtn = document.getElementById('btnReset');

let count = 0;

increaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count++;
    if (count > 0) {
        decreaseBtn.classList.remove('btn-disabled');
        resetBtn.classList.remove('btn-disabled');
    }
    number.textContent = count;
});

decreaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count--;
    if (count <= 0) {
        decreaseBtn.classList.add('btn-disabled');
        resetBtn.classList.add('btn-disabled');
    }
    number.textContent = count;
});

resetBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count = 0;
    decreaseBtn.classList.add('btn-disabled');
    resetBtn.classList.add('btn-disabled');
    number.textContent = count
});