let boxes = document.querySelectorAll(".box")
let player1WinCount = document.querySelector(".player1-win-count")
let player2WinCount = document.querySelector(".player2-win-count")
let tiesCount = document.querySelector(".ties-count")
let turnMessage = document.querySelector(".turn-message")
let playerNumber = document.querySelector(".player-number")
let gameCompletePopup = document.querySelector(".game-complete-popup")
let resultsMessage = document.querySelector(".results-message")
let playAgainBtn = document.querySelector(".play-again-button")

let numberOfTurns = 0
let numberOfPlayer1wins = 0 
let numberOfPlayer2wins = 0 
let numberOfTies = 0

let waysToWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
let boxNumbersClickedByPlayer1 = []
let boxNumbersClickedByPlayer2 = []

function checkIfPlayerWins() {
    waysToWin.forEach(winPattern => {
        let doesPlayer1Win = winPattern.every(number => {
            return boxNumbersClickedByPlayer1.includes(number)
        })
        let doesPlayer2Win = winPattern.every(number => {
            return boxNumbersClickedByPlayer2.includes(number)
        })

        if (doesPlayer1Win) {
            boxes.forEach(box => {
                box.removeEventListener("click", handleClick)
            });
            resultsMessage.textContent = "Congratulations, Player 1 is the winner!"
            gameCompletePopup.style.visibility = "visible"
            turnMessage.style.visibility = "hidden"
            numberOfPlayer1wins++
            player1WinCount.textContent = numberOfPlayer1wins
        } else if (doesPlayer2Win) {
            boxes.forEach(box => {
                box.removeEventListener("click", handleClick)
            });
            resultsMessage.textContent = "Congratulations, Player 2 is the winner!"
            gameCompletePopup.style.visibility = "visible"
            turnMessage.style.visibility = "hidden"
            numberOfPlayer2wins++
            player2WinCount.textContent = numberOfPlayer2wins
        } else if (numberOfTurns === 9) {
            resultsMessage.textContent = "Awww, it's a tie"
            gameCompletePopup.style.visibility = "visible"
            turnMessage.style.visibility = "hidden"
            // debugger
            numberOfTies++
            // console.log(numberOfTies);
            tiesCount.textContent = numberOfTies/8 //!bug numberOfTies runs 8 times when this condition is met 
        }
    })
}

function handleClick(event) {
    let boxClicked = event.target
    let boxNumberClicked = Number(boxClicked.dataset.num)
    numberOfTurns++

    if (numberOfTurns % 2 !== 0) {
        boxClicked.textContent = "X"
        boxNumbersClickedByPlayer1.push(boxNumberClicked)
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        boxNumbersClickedByPlayer2.push(boxNumberClicked)
        playerNumber.textContent = 1
    }
    boxClicked.removeEventListener("click", handleClick)    

    checkIfPlayerWins()
}

boxes.forEach(box => {
    box.addEventListener("click", handleClick)
});

function resetGame() {
    boxes.forEach(box => {
        box.textContent = ""
        box.addEventListener("click", handleClick)
        gameCompletePopup.style.visibility = "hidden"
        turnMessage.style.visibility = "visible"
        numberOfTurns = 0
        playerNumber.textContent = 1
        boxNumbersClickedByPlayer1 = []
        boxNumbersClickedByPlayer2 = []
    });
}

playAgainBtn.addEventListener("click", resetGame)

