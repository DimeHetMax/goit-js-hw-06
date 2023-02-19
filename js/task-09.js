function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body.style;

const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener('click', onClickButton)

function onClickButton(){
  const result = getRandomHexColor();
  body.backgroundColor = `${result}`
  refs.spanEl.textContent = `${result}`
}
