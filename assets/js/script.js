let choices = ['rock', 'paper', 'scissors']
let aiImageChoice = document.getElementById('ai-image-choice')
let computerChoice = '';
let userChoice =''

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type')) {
                userChoice = this.getAttribute('data-type')
                alert(`You choose ${userChoice}`)
                playGame(userChoice);
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