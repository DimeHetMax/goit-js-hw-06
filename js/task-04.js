const counter = {
    value: 0,
    decrement(){
        this.value -=1;
    },
    increment(){
        this.value +=1;
    },
}

const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    spanNumberEl: document.querySelector('#value'),
}

refs.decrementButton.addEventListener('click', onDecrementButtonHendler)
refs.incrementButton.addEventListener('click', onIncrementButtonHendler)

function onDecrementButtonHendler(){
    counter.decrement();
    refs.spanNumberEl.textContent = counter.value;
}
function onIncrementButtonHendler(){
    counter.increment();
    refs.spanNumberEl.textContent = counter.value;
}