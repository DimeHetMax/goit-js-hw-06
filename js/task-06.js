const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const datasetLength = event.currentTarget.dataset.length;
    const stringLength = event.currentTarget.value.length;

    if(stringLength === Number(datasetLength)){
        addClassListName("valid", "invalid")
    } else {
        addClassListName("invalid", "valid")
    }
}
function addClassListName(valid, invalid){
    input.classList.add(valid);
    input.classList.remove(invalid);
}