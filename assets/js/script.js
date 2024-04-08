let choices = ['rock', 'paper', 'scissors']
let aiImageChoice = document.getElementById('ai-image-choice')
let computerChoice = '';
let userChoice =''
let roundNumber = 1;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type')) {
                userChoice = this.getAttribute('data-type')
                setTimeout(() => countRounds(), 3000);
                
                setTimeout(() => playGame(userChoice), 2000);
            } else {
                console.log('Wrong choice')
            }
        })
    }
})


function playGame(userChoice) {

    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    
    aiImageChoice.src = `assets/images/${computerChoice}.jpg`
    determineWinner();
}

function determineWinner() {
    if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice ==='rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        addScoreForUser();
    } else if (userChoice === computerChoice) {
        alert(`Draw`)
    } else {
        addScoreForComputer();
    }
}

function addScoreForUser() {
    let win = parseInt(document.getElementById('your-wins').innerText);
    document.getElementById('your-wins').innerText = ++win;
}

function addScoreForComputer() {
    let win = parseInt(document.getElementById('ai-wins').innerText);
    document.getElementById('ai-wins').innerText = ++win;
}

function countRounds() {
    let game = parseInt(document.getElementById('round-number').innerText);
    
    roundNumber += 1;
    if (roundNumber <= 10) {
        document.getElementById('round-number').innerText = ++game;
        alert(`Round number ${roundNumber}`)
    } else {
        roundNumber = 1;
        document.getElementById('your-wins').innerText = '0'
        document.getElementById('ai-wins').innerText = '0';
        document.getElementById('round-number').innerText = '1';
        alert(`End of the game`)
    }
}