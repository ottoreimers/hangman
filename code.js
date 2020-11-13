// Globala variabler
// debugger;
const wordList = [
  "jelly",
  "enhance",
  "language",
  "taste",
  "commerce",
  "flower",
  "due",
  "poem",
  "visible",
  "create",
  "power",
  "miner",
  "infection",
  "verdict",
  "dome",
  "surprise",
  "heel",
  "reason",
  "absorption",
  "category",
  "appointment",
  "sharp",
  "brother",
  "pass",
  "defeat",
  "miscarriage",
  "bind",
  "brain",
  "thesis",
  "trap",
  "game",
  "resort",
  "command",
  "closed",
  "pepper",
  "route",
  "output",
  "invasion",
  "cater",
  "jump",
  "duke",
  "hurl",
  "stubborn",
]; // Array: med spelets alla ord
const imgList = [
  "Img/h0",
  "Img/PIXL/pixil-frame-0.png",
  "Img/PIXL/pixil-frame-1.png",
  "Img/PIXL/pixil-frame-2.png",
  "Img/PIXL/pixil-frame-3.png",
  "Img/PIXL/pixil-frame-4.png",
  "Img/PIXL/pixil-frame-5.png",
  "Img/PIXL/pixil-frame-6.png",
];
// Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0; // Number: håller antalet gissningar som gjorts
let hangmanImg; // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`
// console.log(guesses);

let msgHolderEl; // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.querySelector("#startGameBtn"); // DOM-nod: knappen som du startar spelet med
let letterButtonEls = document.querySelectorAll(".btn"); // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls = document.querySelectorAll("#box"); // Array av DOM-noder: Rutorna där bokstäverna ska stå
let guessedWord = "";

let counter;
let restartGameBtn = document.querySelector("#restartGameBtn");
let hangmanImgEl = document.querySelector("#hangman");
startGameBtnEl.addEventListener("click", startGame);

restartGameBtn.addEventListener("click", () => {
  location.reload();
  document.querySelectorAll("button").button.disable = false;
});

function startGame() {
  startGameBtnEl.disabled = true;

  // debugger;
  // Sätta hangmanImg-variabeln till images/h0.jpg
  let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log(selectedWord);

  // console.log(selectedWord);

  letterButtonEls.forEach((element) => {
    element.addEventListener("click", makeTextAppear);
  });

  for (let i = 0; i < selectedWord.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML =
      '<input class="listBorder" type="text" disabled value=&nbsp;" />';
    document.querySelector("#letterBoxes").appendChild(liElement);
    liElement.classList.add("listItem");
  }
  function makeTextAppear(letter) {
    // debugger;
    const myNodeList = document.querySelectorAll(".listItem");
    let keyPress = letter.target.value.toLowerCase();
    const indexNum = selectedWord.indexOf(keyPress);

    if (indexNum < 0) {
      letter.target.style.backgroundColor = "red";
      guesses++;
      document.querySelector("#hangman").setAttribute("src", imgList[guesses]);
      letter.target.disabled = true;
      if (guesses >= 7) {
        document.querySelector(
          ".lose"
        ).innerHTML = `YOU LOST! The word you were looking for is "${selectedWord}"`;
        for (let button of letterButtonEls) {
          button.disabled = true;
        }
      }

      return;
    } else {
      guessedWord += keyPress;
      if (selectedWord.length === guessedWord.length) {
        document.querySelector(
          ".win"
        ).innerHTML = `You guessed right! The word was "${selectedWord}"`;
      }
      // console.log(keyPress)
      myNodeList[indexNum].textContent = keyPress;
      letter.target.style.backgroundColor = "#9bbc0f";
      letter.target.disabled = true;
      // console.log(myNodeList[indexNum].value)
      const indexNum2 = selectedWord.indexOf(keyPress, indexNum + 1);
      if (indexNum2 < 0) {
        return;
      } else {
        myNodeList[indexNum2].textContent = keyPress;
        // console.log(indexNum2)
      }
    }
  }
}
