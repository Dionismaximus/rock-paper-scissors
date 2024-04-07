document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type')) {
                let userChoice = this.getAttribute('data-type')
                alert(`You choose ${userChoice}`)
            } else {
                console.log('Wrong choice')
            }
        })
    }
})