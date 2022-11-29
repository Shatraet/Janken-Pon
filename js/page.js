// cache the dom (storing for future use)
// & reset everything to 0 value
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('fire');
const paper_div = document.getElementById('water');
const scissors_div = document.getElementById('grass');

// set up the core function for the computer that will use math.random to loop through an array and return that value
function getComputerChoice() {
const choices = ['fire', 'water', 'grass'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertCase(anythingIwant) {
if (anythingIwant === 'water') return 'water';
if (anythingIwant === 'grass') return 'grass';
return 'fire';
}

// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, computer) {
userScore++;
// console.log('user score is ' + userScore + ' ' + user);
userScore_span.innerHTML = userScore;

result_div.innerHTML = `<p><span style="color:purple">${convertCase(user)}</span> beats <span>${convertCase(computer)}</span>. You win!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}
// Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function loses(user, computer) {
computerScore++;
// console.log('computer score is ' + computerScore + ' ' + computer);
computerScore_span.innerHTML = computerScore;

result_div.innerHTML = `<p><span style="color:yellow">${convertCase(computer)}</span> beats <span style="color:purple">${convertCase(user)}</span>. You suck!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('losingStyles');
setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}
// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(user, computer) {
result_div.innerHTML = `<p>Yall both chose ${convertCase(user)} why are you so in sink!</p>`;
// "It was a draw! You both chose " + user + " " + computer; // old js
const roundStatus = document.getElementById(user);
roundStatus.classList.add('drawStyles');
setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

// The core game functions that set up and determine the games actual logic aka paper beats rock etc
function game(userChoice) {
const computerChoice = getComputerChoice();
// console.log('Game function: user choice is = ' + userChoice);
// console.log('Game function: computer choice is = ' + computerChoice);
switch (userChoice + computerChoice) {
case 'waterfire':
case 'firegrass':
case 'grasswater':
win(userChoice, computerChoice);
// console.log("user wins");
break;
case 'firewater':
case 'grassfire':
case 'watergrass':
loses(userChoice, computerChoice);
// console.log("computer wins");
break;
case 'firefire':
case 'grassgrass':
case 'waterwater':
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}
// ES5 style of writing this function
// function main() {
// rock_div.addEventListener('click', function() {
// game('rock');
// });
// paper_div.addEventListener('click', function() {
// game('paper');
// });
// scissors_div.addEventListener('click', function() {
// game('scissors');
// });
// }
// ES6 style of writing this function
// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function

function main() {
rock_div.addEventListener('click', () => game('fire'));
paper_div.addEventListener('click', () => game('water'));
scissors_div.addEventListener('click', () => game('grass'));
}
main();