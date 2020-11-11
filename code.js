const wordList = [
  "Jelly",
  "Enhance",
  "Language",
  "Taste",
  "Commerce",
  "Flower",
  "Due",
  "Conscience",
  "Poem",
  "Interference",
  "Visible",
  "Create",
  "Power",
  "Miner",
  "Infection",
  "Verdict",
  "Dome",
  "Legislation",
  "Surprise",
  "Heel",
  "Reason",
  "Absorption",
  "Category",
  "Announcement",
  "Initial",
  "Coincidence",
  "Appointment",
  "Sharp",
  "Brother",
  "Pass",
  "Defeat",
  "Momentum",
  "Miscarriage",
  "Bind",
  "Brain",
  "Thesis",
  "Trap",
  "Game",
  "Resort",
  "Command",
  "Closed",
  "Pepper",
  "Route",
  "Output",
  "Invasion",
  "Cater",
  "Jump",
  "Duke",
  "Hurl",
  "Stubborn",
];  // Array: med spelets alla ord
const imgList = ['Img/h0.png', 'Img/h1.png', 'Img/h2.png', 'Img/h3.png', 'Img/h4.png', 'Img/h5.png', 'Img/h6.png']
let selectedWord;    // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) vid fel svar. t.ex. `/images/h1.png`

let msgHolderEl = document.querySelector('#message');     // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.querySelector('#startGameBtn');  // DOM-nod: knappen som du startar spelet med
let letterButtonEls = document.querySelectorAll('#letterButtons button'); // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls = document.querySelectorAll('#letterBoxes ul li');    // Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterBoxContainerEl = document.querySelector('#letterBoxes ul');
let letterButtonContainerEl = document.querySelector('ul#letterButtons');
let hangmanImgEl = document.querySelector('#hangman');

startGameBtnEl.addEventListener('click', initiateGame);

letterButtonContainerEl.addEventListener('click', guessLetter);

function guessLetter(e) {
  // om användaren ej klickat på en knapp, returna
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  // hit kommer vi enbart om användaren tryckt på en knapp
  // console.log(e.target.value);
  let guessedLetter = e.target.value;
  // öka guesses med 1
  guesses = guesses + 1;
  // (kolla om guesses är för högt?)


  const indexOfFirst = selectedWord.indexOf(guessedLetter);
  // console.log(indexOfFirst)
  if (indexOfFirst < 0) {
    guesses = guesses + 1;
    e.target.style.backgroundColor = "red";
    return;
  } else {
    // bokstav HITTAD
    letterBoxEls[indexOfFirst].firstElementChild.value = guessedLetter;
    e.target.style.backgroundColor = "rgb(0, 255, 0)";
  }
  // om ja: sätt in tecknet i den tomma rutan som överensstämmer med
  const indexOfSecond = selectedWord.indexOf(guessedLetter, indexOfFirst + 1);
  // console.log(indexOfSecond)
  if (indexOfSecond < 0) {
    return;
  } else {
    // bokstav HITTAD
    letterBoxEls[indexOfSecond].firstElementChild.value = guessedLetter;
  }
  // positionen i ordet
  // om nej: gör nåt annat
}

// funktion som uppdaterar bilden som visas
function setHangmanImg(index) {

}

// Funktion som slumpar fram ett ord
function randomWord (arr) {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}
// console.log(randomWord)

//  skriv en funktion som rensar letterboc-rutorna, dvs tar bort dem
function removeLb(){
  letterBoxContainerEl.innerHTML = "";
}
// skriv en funktion som genererar antal tomma letterboxrutor
function generateLb(amaount){
  // amount = det antal rutor vi vill generera
  for (let i = 0; i < amaount; i++){
  let newLi = document.createElement('li');
  newLi.innerHTML = '<input type="text" disabled value=&nbsp;" />'
  letterBoxContainerEl.appendChild(newLi);
  }
  letterBoxEls = document.querySelectorAll('#letterBoxes ul li');
}

function activate () {

    for (let i = 0; i < letterButtonEls.length; i++) {
        //console.log("index: " + i)
        //console.log("element: ");
        //console.log(letterButtonEls[i])
        letterButtonEls[i].disabled = false
    }

}
function deactivate () {
    for (let i = 0; i < letterButtonEls.length; i++) {
        //console.log("index: " + i)
        //console.log("element: ");
        //console.log(letterButtonEls[i])
        letterButtonEls[i].disabled = true
    }
}

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
function initiateGame() {
    // sätta upp spelet
    // slumpa fram ett ord (klar)
    // räkna längden (= antal gissningar spelaren har kvar) (klar)
    // aktivera knappar (klar)
    // sätta hangmanImg-variablen till images/h0.png

    // sätt img-taggens src property till hangmanImg
    // se till att antalet tomma rutor i ul:n letterBoxEls stämmer överrens med ordets längd
    guesses = 0;
    selectedWord = randomWord(wordList).toUpperCase();
    let wordLength = selectedWord.length;
    activate();
    removeLb();
    generateLb(wordLength);
    console.log(selectedWord)
}


// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumpas fram
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet


// vcreate a variable and assign it element main from DOM

const myvar = document.querySelector('main');
let myButtonContainer = document.querySelector('#letterButtons')
