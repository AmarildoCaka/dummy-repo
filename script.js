// Alert Function:

$(document).ready(() => {

    const message = 'The counter is ready!';

    alert(message);

});

// Counter Mechanism Function:

let value = 0;

const counterValue = document.getElementById('counter-text-id');

const updateCounter = () => {

    counterValue.textContent = value;

}

const increment = () => {

    const incrementBtn = document.getElementById('increment-btn-id');

    incrementBtn.addEventListener('click', () => {

        value = value + 1;

        updateCounter();
    
    });

}

const decrement = () => {

    const decrementBtn = document.getElementById('decrement-btn-id');

    decrementBtn.addEventListener('click', () => {

        value = value - 1;

        updateCounter();

    });

}

const reset = () => {

    const resetBtn = document.getElementById('reset-btn-id');

    resetBtn.addEventListener('click', () => {

        value = 0;

        updateCounter();

    });

}