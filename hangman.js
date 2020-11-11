// Globala variabler
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
];      // Array: med spelets alla ord
const imgList = ['Img/h0.png', 'Img/h1.png', 'Img/h2.png', 'Img/h3.png', 'Img/h4.png', 'Img/h5.png', 'Img/h6.png']
let selectedWord;    // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl = document.querySelector('#message');     // DOM-nod: Ger meddelande när spelet är över
let startGameBtnEl = document.querySelector('#startGameBtn');  // DOM-nod: knappen som du startar spelet med
let letterButtonEls = document.querySelectorAll('.btn'); // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls = document.querySelectorAll('#letterBoxes ul li');    // Array av DOM-noder: Rutorna där bokstäverna ska stå
let letterBoxContainerEl = document.querySelector('#letterBoxes ul');
let letterButtonContainerEl = document.querySelectorAll('.btn');
let hangmanImgEl = document.querySelector('#hangman');

startGameBtnEl.addEventListener('click', startGame);
letterButtonContainerEl.addEventListener('click', letter)


function letter() {
}

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
function startGame() {
  // callar på andra funktioner
}

// Funktion som slumpar fram ett ord


// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet


