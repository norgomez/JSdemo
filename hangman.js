//Hangman Game
const wordList = ['apple', 'banana', 'orange', 'strawberry'];

let word = '';
let letters = [];
let guesses = [];
let maxGuesses = 6;

function setup() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  letters = word.split('');
  guesses = new Array(letters.length).fill('_');
}

function guess(letter) {
  if (guesses.includes(letter)) {
    console.log(`You have already guessed "${letter}"`);
    return;
  }

  let correctGuess = false;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letter) {
      guesses[i] = letter;
      correctGuess = true;
    }
  }

  if (!correctGuess) {
    maxGuesses--;
  }
}

function gameOver() {
  return maxGuesses === 0 || guesses.join('') === word;
}

function draw() {
  console.log(`Word: ${guesses.join(' ')}`);
  console.log(`Guesses remaining: ${maxGuesses}`);
}

function play() {
  setup();
  while (!gameOver()) {
    draw();
    const letter = prompt('Guess a letter:');
    guess(letter);
  }
  if (maxGuesses === 0) {
    console.log(`You lose! The word was "${word}"`);
  } else {
    console.log(`You win! The word was "${word}"`);
  }
}

play();




