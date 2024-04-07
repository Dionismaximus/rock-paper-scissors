let choices = ['rock', 'paper', 'scissors']
let aiImageChoice = document.getElementById('ai-image-choice')

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type')) {
                let userChoice = this.getAttribute('data-type')
                alert(`You choose ${userChoice}`)
                playGame(userChoice);
            } else {
                console.log('Wrong choice')
            }
        })
    }
})


function playGame(userChoice) {

    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    alert(`Computer choice ${computerChoice}`)
    aiImageChoice.src = `assets/images/${computerChoice}.jpg`
    alert(`Image for AI is ${computerChoice}`)

}