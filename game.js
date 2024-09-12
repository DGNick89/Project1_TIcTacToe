
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
const startBtn = document.querySelector('.start-btn')
let currentPlayer = 'X'
let playerXscore = document.querySelector('.playerX-score')
let playerOscore = document.querySelector('.playerO-score')
let playerXWins = document.querySelector('.playerXwins')
let playerOWins = document.querySelector('.playerOwins')
let counter = 0;

playerXscore.textContent = 0;
playerOscore.textContent = 0;
let hasWon = false

function startGame() {
    const audioElement = new Audio('./sound/futuristic-noises-236386.mp3');
    audioElement.play()
    startBtn.style.display = 'none';
    document.querySelector('.game-board').style.display = 'inline'
    playAgainBtn.style.display = 'inline'

}
 

function switchPlayers() {

    
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
       
    }

    if (currentPlayer === 'X') {
        document.querySelector('.playerX').style.borderRight = "5px solid red";
        document.querySelector('.playerO').style.borderLeft = "5px solid white";
    } else if (currentPlayer === 'O') {
        document.querySelector('.playerX').style.borderRight = "5px solid white";
        document.querySelector('.playerO').style.borderLeft = "5px solid red"
    }


}

function playerTurn(event) {
    const audioElementWin = new Audio('./sound/futuristic-zoom-whoosh-2-183978.mp3')
    let elem = event.target
    if (hasWon === true) {
        return
    }

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
        playerXWins.textContent = 'PLAYER X WINS!';
        playerXscore.textContent++;
        hasWon = true
        audioElementWin.play()
        return
             
       
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
        playerOWins.textContent = 'PLAYER O WINS!';
        playerOscore.textContent++;
        hasWon = true
        audioElementWin.play()
        return
        
    }

    switchPlayers()
    counter++;
    if(counter>=9){
        playerXWins.textContent = 'DRAW!'
        playerOWins.textContent = 'DRAW!'
    }

}


function playAgain() {
    hasWon = false
    counter = 0;
    playerXWins.textContent = "";
    playerOWins.textContent = "";
    for (let i = 0; i < sections.length; i++) {     
    sections[i].textContent = ''
        if (sections[i].classList.contains('X') || sections[i].classList.contains('O') ) {
        sections[i].classList.remove('X') || sections[i].classList.remove('O')
    }
    }

}


startBtn.addEventListener('click', startGame)

for(let elem of sections ) {
elem.addEventListener('click', playerTurn)

}


for (let i = 0; i < sections.length; i++) {     
playAgainBtn.addEventListener('click', playAgain)
}


