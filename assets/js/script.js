let choices = ['rock', 'paper', 'scissors']
let aiImageChoice = document.getElementById('ai-image-choice')
let computerChoice = '';
let userChoice =''
let roundNumber = 1;
let aiField = document.getElementById('ai-field-change');
let roundResult = document.getElementById('roundResult');


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type')) {
                userChoice = this.getAttribute('data-type')
                setTimeout(() => countRounds(), 3000);

                /* Styles for buttons and game-field */
                button.style.transform = 'scale(1.5)';

                buttons[0].style.zIndex = '-1';
                buttons[1].style.zIndex = '-1';
                buttons[2].style.zIndex = '-1';
                button.style.zIndex = '1';


                setTimeout(() => aiField.style.transform = 'scale(1.5)', 1800);

                let gameField = document.getElementById('gameField');

                gameField.style.backgroundColor = 'rgba(124, 124, 124, 0.5)';
                setTimeout(() => playGame(userChoice), 2000);

                /* Return default styles at the end of the round*/
                setTimeout(() => button.style.transform = '', 4000);
                setTimeout(() => aiField.style.transform = '', 4000);
                setTimeout(() => gameField.style.backgroundColor = '', 4000);
                setTimeout(() => buttons[0].style.zIndex = '', 4000);
                setTimeout(() => buttons[1].style.zIndex = '', 4000);
                setTimeout(() => buttons[2].style.zIndex = '', 4000);    
            } else {
                console.log('Wrong choice')
            }
        })
    }
})


function playGame(userChoice) {

    computerChoice = choices[Math.floor(Math.random() * choices.length)]
    
    aiImageChoice.src = `assets/images/${computerChoice}.jpg`
    setTimeout(() => aiImageChoice.src = `assets/images/rock, paper, scissors.gif`, 2500);
    determineWinner();
}

function determineWinner() {
    if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice ==='rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        addScoreForUser();
        roundResult.innerText = 'WIN!';
        roundResult.style.color = 'green';
        setTimeout(() => roundResult.innerText = '', 2000)
    } else if (userChoice === computerChoice) {
        roundResult.innerText = 'DRAW';
        roundResult.style.color = 'grey'
        setTimeout(() => roundResult.innerText = '', 2000)
    } else {
        addScoreForComputer();
        roundResult.innerText = 'LOSE';
        roundResult.style.color = 'red'
        setTimeout(() => roundResult.innerText = '', 2000)
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
    } else {
        roundNumber = 1;
        document.getElementById('your-wins').innerText = '0'
        document.getElementById('ai-wins').innerText = '0';
        document.getElementById('round-number').innerText = '1';
        alert(`End of the game`)
    }
}
