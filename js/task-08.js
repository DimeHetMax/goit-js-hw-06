const form = document.querySelector('.login-form');

form.addEventListener("submit", onSubmitButton)

function onSubmitButton(event) {
    event.preventDefault()
    
    const elements = event.currentTarget.elements;
    
    if(elements.email.value === "" || elements.password.value === ""){
        alert('Все поля должны быть заполнены!');
        alert('All fields should be filled out!');
    } else{
    const email = elements.email.value;
    const password = elements.password.value;

    const dataObj = {
            email, 
            password,
        }
    console.log(dataObj)
    }
    event.currentTarget.reset();
}