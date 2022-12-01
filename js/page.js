
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const fire_div = document.getElementById('fire');
const water_div = document.getElementById('water');
const grass_div = document.getElementById('grass');

function getComputerChoice() {
const choices = ['fire', 'water', 'grass'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertCase(anythingIwant) {
if (anythingIwant === 'water') return 'water';
if (anythingIwant === 'grass') return 'grass';
return 'fire';
}

function win(user, computer) {
userScore++;
userScore_span.innerHTML = userScore;

result_div.innerHTML = `<p><span style="color:purple">${convertCase(user)}</span> beats <span>${convertCase(computer)}</span>. You win!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}
function loses(user, computer) {
computerScore++;
computerScore_span.innerHTML = computerScore;

result_div.innerHTML = `<p><span style="color:yellow">${convertCase(computer)}</span> beats <span style="color:purple">${convertCase(user)}</span>. You suck!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('losingStyles');

}

function draw(user, computer) {
result_div.innerHTML = `<p>Yall both chose ${convertCase(user)} why are you so in sink!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('drawStyles');
setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

function game(userChoice) {
const computerChoice = getComputerChoice();

switch (userChoice + computerChoice) {
case 'waterfire':
case 'firegrass':
case 'grasswater':
win(userChoice, computerChoice);
//("user wins");
break;
case 'firewater':
case 'grassfire':
case 'watergrass':
loses(userChoice, computerChoice);
// ("computer wins");
break;
case 'firefire':
case 'grassgrass':
case 'waterwater':
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}
function main() {
fire_div.addEventListener('click', () => game('fire'));
water_div.addEventListener('click', () => game('water'));
grass_div.addEventListener('click', () => game('grass'));
}
main();