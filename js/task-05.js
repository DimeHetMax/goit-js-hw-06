const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (event) =>{
    if(event.currentTarget.value.trim() === ""){
        refs.span.textContent = "Anonymous"
    } else{
        refs.span.textContent = event.currentTarget.value.trim();
    }
 })