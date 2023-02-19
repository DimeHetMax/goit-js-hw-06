const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const datasetLength = event.currentTarget.dataset.length;
    const stringLength = event.currentTarget.value.length;

    if(Number(stringLength) === Number(datasetLength)){
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}