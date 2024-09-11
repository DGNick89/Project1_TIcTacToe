
const sections = document.querySelectorAll('section')
const playAgainBtn = document.querySelector('.play-again-btn')
const rowA = document.querySelectorAll('.row-A')
const lineAA = document.getElementById('aa-elem')
const lineAB = document.getElementById('ab-elem')
const lineAC = document.getElementById('ac-elem')
const lineBA = document.getElementById('ba-elem')
const lineBB = document.getElementById('bb-elem')
const lineBC = document.getElementById('bc-elem')
const lineCA = document.getElementById('ca-elem')
const lineCB = document.getElementById('cb-elem')
const lineCC = document.getElementById('cc-elem')
const columnA = document.querySelectorAll('.column-A')
let currentPlayer = 'X'

function switchPlayers() {

    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

function playerXTurn(event) {
    let elem = event.target
    if (elem.textContent === 'X' || elem.textContent === "O") {
        return
    }
    
    elem.textContent = currentPlayer

    if (elem.textContent === 'X') {
        elem.classList.add('X')
    }
    

    if (lineAA.classList.contains('X') && 
        lineAB.classList.contains('X') && 
        lineAC.classList.contains('X') || 
        lineBA.classList.contains('X') && 
        lineBB.classList.contains('X') && 
        lineBC.classList.contains('X') ||
        lineCA.classList.contains('X') &&
        lineCB.classList.contains('X') &&
        lineCC.classList.contains('X') ||
        lineAA.classList.contains('X') &&
        lineBA.classList.contains('X') &&
        lineCA.classList.contains('X') ||
        lineAB.classList.contains('X') &&
        lineBB.classList.contains('X') &&
        lineCB.classList.contains('X') ||
        lineAC.classList.contains('X') &&
        lineBC.classList.contains('X') &&
        lineCC.classList.contains('X') ||
        lineAA.classList.contains('X') &&
        lineBB.classList.contains('X') &&
        lineCC.classList.contains('X') ||
        lineAC.classList.contains('X') &&
        lineBB.classList.contains('X') &&
        lineCA.classList.contains('X')) {
        alert ('PLAYER X WINS')
    }
    switchPlayers()
}

function playAgain() {
    for (let i = 0; i < sections.length; i++) {   
  
    sections[i].textContent = ''

    if (sections[i].classList.contains('X')) {
        sections[i].classList.remove('X')
    }
}

}
for(let elem of sections ) {
elem.addEventListener('click', playerXTurn)

}


for (let i = 0; i < sections.length; i++) {    
    console.log(sections[i]);
    
playAgainBtn.addEventListener('click', playAgain)
}



