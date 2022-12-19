// This will be a hangman game 

//storing values 
let gameRounds = 0;
let scoreUser = 0;
let scoreComputer = 0;


//List of random words
const word = [
    'Got',
    'ability',
    'shop',
    'recall',
    'fruit',
    'easy',
    'dirty',
    'giant',
    'shaking',
    'ground',
    'weather',
    'lesson',
    'almost',
    'square',
    'forward',
    'bend',
    'cold',
    'broken',
    'distant',
    'adjective'
]

let randomElement = word[Math.floor(Math.random() * word.length)]

let userInput = prompt('Please enter a word');

if (game(userInput) == randomElement){
    console.log('winner');
} else{
    console.log('Loser');

}



function game(x) {
    for (let i = 0; i < 10; i++) {
        if (x == randomElement) {
            ++scoreUser
        } else {
            ++scoreComputer
        };
        
    };
};


console.log(scoreUser);
console.log(scoreComputer);
// print outputs
console.log(randomElement);