const number = document.getElementById('number');
const increaseBtn = document.getElementById('btnIncrease');
const decreaseBtn = document.getElementById('btnDecrease');
const resetBtn = document.getElementById('btnReset');

let count = 0;

increaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count++;
    if (count > 0) {
        enabledBtn(decreaseBtn, resetBtn);
    }
    number.textContent = count;
});

decreaseBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count--;
    if (count === 0) {
        disabledBtn(decreaseBtn, resetBtn);
    }
    number.textContent = count;
});

resetBtn.addEventListener('click', (e) => {
    if (!e.target.closest('.btn')) return;
    count = 0;
    disabledBtn(decreaseBtn, resetBtn);
    number.textContent = count
});

const disabledBtn = (...buttons) => {
    buttons.forEach(button => {
        button.classList.add('btn-disabled');
        button.disabled = true;
    });
};

const enabledBtn = (...buttons) => {
    buttons.forEach(button => {
        button.classList.remove('btn-disabled');
        button.disabled = false;
    });
};