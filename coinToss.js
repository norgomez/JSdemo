

//////Storing Values
let heads = 0;
let tails = 0;

//////for loop 1000 counter
for (let i = 0; i < 1000; i++) {
    let result = getRandomNumber(2)

    if (result == 1) {
        heads++
    } else {
        tails++
    };
    
};


//////Get random number function
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};



//////Outputs
console.log("Tossing a coin 1000 times!")

console.log("================================")

console.log("Total number of Heads: " + heads);
console.log("Total number of Tails: " + tails);

console.log("================================")

//////Printing out the winner
if (heads > tails) {
    console.log('Heads is the winner!')
} else{
    console.log('Tails is the winnner!')
};