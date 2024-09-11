
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
let counter = 0;

function switchPlayers() {

    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
}

function playerTurn(event) {
    let elem = event.target
    if (elem.textContent === 'X' || elem.textContent === "O") {
        return
    }
    
    elem.textContent = currentPlayer

    if (elem.textContent === 'X') {
        elem.classList.add('X')
    } else if (elem.textContent === 'O') {
        elem.classList.add('O')
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
        alert(`PLAYER X WINS!`)
        return;
    } else if (
        lineAA.classList.contains('O') && 
        lineAB.classList.contains('O') && 
        lineAC.classList.contains('O') || 
        lineBA.classList.contains('O') && 
        lineBB.classList.contains('O') && 
        lineBC.classList.contains('O') ||
        lineCA.classList.contains('O') &&
        lineCB.classList.contains('O') &&
        lineCC.classList.contains('O') ||
        lineAA.classList.contains('O') &&
        lineBA.classList.contains('O') &&
        lineCA.classList.contains('O') ||
        lineAB.classList.contains('O') &&
        lineBB.classList.contains('O') &&
        lineCB.classList.contains('O') ||
        lineAC.classList.contains('O') &&
        lineBC.classList.contains('O') &&
        lineCC.classList.contains('O') ||
        lineAA.classList.contains('O') &&
        lineBB.classList.contains('O') &&
        lineCC.classList.contains('O') ||
        lineAC.classList.contains('O') &&
        lineBB.classList.contains('O') &&
        lineCA.classList.contains('O')) {
        alert(`PLAYER O WINS!`)
        return;
    }
    switchPlayers()
    counter++;
    if(counter>=9){
        alert(`DRAW. TRY AGAIN!`)
    }

}


function playAgain() {
    counter = 0;
    for (let i = 0; i < sections.length; i++) {     
    sections[i].textContent = ''
        if (sections[i].classList.contains('X') || sections[i].classList.contains('O') ) {
        sections[i].classList.remove('X') || sections[i].classList.remove('O')
    }
}

}
for(let elem of sections ) {
elem.addEventListener('click', playerTurn)

}


for (let i = 0; i < sections.length; i++) {    
    // console.log(sections[i]);
    
playAgainBtn.addEventListener('click', playAgain)
}



