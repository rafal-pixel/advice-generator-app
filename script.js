const URL_API = `https://api.adviceslip.com/advice/`;

const numberText = document.querySelector("#number-text");
const adviceText = document.querySelector("#advice-text");
const drawButton = document.querySelector("#draw-button");

const addToHTML = (number, advice) => {
  numberText.innerHTML = `#${number}`;
  adviceText.innerHTML = `<q>${advice}</q>`;
};

const fetchAdvice = async (number) => {
  const response = await fetch(`${URL_API}${number}`);
  const json = await response.json();
  const { advice } = json.slip;
  addToHTML(number, advice);
};

if (drawButton) {
  drawButton.addEventListener("click", () => {
    const number = Math.floor(Math.random() * (224 - 1) + 1);
    fetchAdvice(number);
  });
}

fetchAdvice(117);
