const form = document.querySelector('.login-form');

form.addEventListener("submit", onSubmitButton)

function onSubmitButton(event) {
    event.preventDefault()
    
    const {email, password} = event.currentTarget.elements;

    if(email.value.trim() === "" || password.value === ""){
        alert('Все поля должны быть заполнены!');
        return alert('All fields should be filled out!');
    }
        const dataObj = {
            email: `${email.value}`, 
            password: `${password.value}`,
        }
        console.log(dataObj) 
    event.currentTarget.reset();
}