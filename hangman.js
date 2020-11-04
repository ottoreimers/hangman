// Globala variabler
// debugger;
const wordList = ["BAG", "FIRE", "PLANT", "MOSCOW", "HAMMARBY"]; // Array: med spelets alla ord
// Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0; // Number: håller antalet gissningar som gjorts
let hangmanImg; // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl; // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.querySelector("#startGameBtn"); // DOM-nod: knappen som du startar spelet med
let letterButtonEls = document.querySelectorAll(".btn"); // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls; // Array av DOM-noder: Rutorna där bokstäverna ska stå
let restartGameBtn = document.querySelector('#restartGameBtn')
startGameBtnEl.addEventListener("click", startGame);
restartGameBtn.addEventListener("click", () => {
  location.reload()
})
function startGame() {

  // debugger;
  let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log(selectedWord);
  letterButtonEls.forEach((element) => {
    element.addEventListener("click", makeTextAppear);
  });
  for (let i = 0; i < selectedWord.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = '<input type="text" disabled value="" />';
    document.querySelector("#letterContainers").appendChild(liElement);

  }
  function makeTextAppear(letter) {
    // debugger;
    let containers = document.querySelector("#letterContainers");
    let letterArray = containers.querySelectorAll("li");
    let keyPress = letter.target.value.toUpperCase();
    let indexNum = selectedWord.indexOf(keyPress);

    if (indexNum != -1) {
      letterArray[indexNum].textContent = keyPress;
      document.getElementsByClassName('win').innerHTML = 'Congratulations! You won!';
    } else {
      letter.target.style.backgroundColor = "red";
      document.getElementsByClassName('lose').innerHTML = 'Sorry! GAME OVER!';

    }
  }

}







// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktion som slumpar fram ett ord
// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på