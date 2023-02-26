let boxes = document.querySelectorAll(".box")
let player1WinCount = document.querySelector(".player1-win-count")
let player2WinCount = document.querySelector(".player2-win-count")
let tiesCount = document.querySelector(".ties-count")
let roundsCount = document.querySelector(".rounds-count")
let turnMessage = document.querySelector(".turn-message")
let playerNumber = document.querySelector(".player-number")
let gameCompletePopup = document.querySelector(".game-complete-popup")
let resultsMessage = document.querySelector(".results-message")
let playAgainBtn = document.querySelector(".play-again-button")
let singlePlayerMode = document.querySelector(".single-player-mode")
let twoPlayerMode = document.querySelector(".two-player-mode")

let numberOfPlays = 0
let numberOfPlayer1wins = 0 
let numberOfPlayer2wins = 0 
let numberOfTies = 0
let numberOfRounds = 1

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
let boxNumbersPlayed = []
let boxNumbersNotPlayed = []

let gameFinished = false
let gameHasWinner = false
//? RESET BUTTON
// ? Disable box clicking while computer is playing
//! On single player mode If there is a tie on the second round, the message doesnt appear. Fine for two player mode


function startSinglePlayerMode () { //* FOR SINGLE PLAYER MODE
    singlePlayerMode.classList.add("jello-horizontal")
    twoPlayerMode.removeEventListener("click", startTwoPlayerMode)
    singlePlayerMode.removeEventListener("click", startTwoPlayerMode)
    twoPlayerMode.style.cursor = "not-allowed" 
    singlePlayerMode.style.cursor = "not-allowed" 
    twoPlayerMode.style.backgroundColor = "grey"
    // ! change color of disabled box

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
                    box.removeEventListener("click", handleClickSinglePlayer)
                    box.removeEventListener("mouseover", handleHover)
                    box.style.cursor = "not-allowed" 
                });
                resultsMessage.textContent = "Congratulations, YOU are the winner!"
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
                numberOfPlayer1wins++                                          
                player1WinCount.textContent = numberOfPlayer1wins
                gameFinished = true
                console.log("does player 1 win", doesPlayer1Win);
                gameHasWinner = true
            } else if (doesPlayer2Win) {
                boxes.forEach(box => {
                    box.removeEventListener("click", handleClickSinglePlayer)
                    box.removeEventListener("mouseover", handleHover)
                    box.style.cursor = "not-allowed"   
                });
                resultsMessage.textContent = "The computer is the winner!"
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
                numberOfPlayer2wins++                                            
                player2WinCount.textContent = numberOfPlayer2wins
                gameFinished = true
                gameHasWinner = true
            } else if (numberOfPlays === 9) { // be weary of this as it will run through the waysToWin array 8 times
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
                gameFinished = true
                console.log("tie message reveal runs?");
            }
        })
        
        if (numberOfPlays === 9 && gameHasWinner === false) { 
            resultsMessage.textContent = "Awww, it's a tie"
            numberOfTies++
            tiesCount.textContent = numberOfTies
            console.log(("tie message text runs?"))
        }
    }

    function handleHover () {
        let boxHovering = event.target
        boxHovering.classList.add("pulsate-fwd")
        boxHovering.classList.add("hovering")
        boxHovering.textContent = "X"
    }
    
    boxes.forEach(box => {
        box.addEventListener("mouseover", handleHover)
    })

    function handleHoverOff () {
        let boxHovering = event.target
        boxHovering.textContent = ""
        boxHovering.classList.remove("hovering")
        boxHovering.classList.remove("pulsate-fwd")
    }

    boxes.forEach(box => {
        box.addEventListener("mouseout", handleHoverOff)
    })

    function handleClickSinglePlayer(event) {
        let boxClicked = event.target
        let boxNumberClicked = Number(boxClicked.dataset.num)
        numberOfPlays++
        console.log("number of plays", numberOfPlays);
        boxClicked.classList.add("clicked")
        boxClicked.classList.add("flip-horizontal-top")

        boxClicked.textContent = "X"
        boxNumbersClickedByPlayer1.push(boxNumberClicked)
        boxNumbersPlayed.push(boxNumberClicked)
        console.log('all box numbers played after player 1 goes', boxNumbersPlayed);
        playerNumber.textContent = 2

        boxClicked.removeEventListener("click", handleClickSinglePlayer)
        boxClicked.removeEventListener("mouseover", handleHover) 
        boxClicked.removeEventListener("mouseout", handleHoverOff)
        boxClicked.style.cursor = "not-allowed"    
        
        checkIfPlayerWins()
            
        if (gameFinished === false) { // if game is not finished, then let the computer play a turn
            for(let num=1; num<=9; num++) {
                if(!boxNumbersPlayed.includes(num)) {
                    boxNumbersNotPlayed.push(num);
                }
            }
            console.log("box numbers not played",boxNumbersNotPlayed);

            let boxNumberPlayedByComputer = boxNumbersNotPlayed[Math.floor(Math.random() * boxNumbersNotPlayed.length)]
            boxNumbersNotPlayed = []
            console.log('box number played by computer', boxNumberPlayedByComputer);
    
            boxes.forEach(box => { 
                if (boxNumberPlayedByComputer === Number(box.dataset.num)){
                    box.removeEventListener("mouseover", handleHover) 
                    box.removeEventListener("mouseout", handleHoverOff)
                    box.removeEventListener("click", handleClickSinglePlayer)
                    box.style.cursor = "not-allowed"  
                    // ? have random delay time..
                    setTimeout(function() {
                        box.textContent = "O" 
                        box.classList.add("flip-horizontal-top")
                        boxNumbersClickedByPlayer2.push(boxNumberPlayedByComputer)
                        console.log('box numbers clicked by player 2 array',boxNumbersClickedByPlayer2);
                        boxNumbersPlayed.push(boxNumberPlayedByComputer)
                        console.log('all box numbers played after computer goes', boxNumbersPlayed);
                        playerNumber.textContent = 1
                        numberOfPlays++
                        console.log("number of plays", numberOfPlays);
                        checkIfPlayerWins() 
                    }, 1000);
                }
            })
        }
    }

    boxes.forEach(box => {
        box.addEventListener("click", handleClickSinglePlayer)
    });

    function resetGame() {
        boxes.forEach(box => {
            box.textContent = ""
            box.addEventListener("click", handleClickSinglePlayer)
            box.addEventListener("mouseover", handleHover) 
            box.addEventListener("mouseout", handleHoverOff) 
            box.style.cursor = "pointer"
            box.classList.remove("hovering")
            box.classList.remove("clicked")   
            box.classList.remove("flip-horizontal-top")
            box.classList.remove("pulsate-fwd")
        })
        gameCompletePopup.style.visibility = "hidden"
        gameCompletePopup.classList.remove("text-focus-in")
        turnMessage.style.visibility = "visible"
        boxNumbersClickedByPlayer1 = []
        boxNumbersClickedByPlayer2 = []
        boxNumbersPlayed = []
        boxNumbersNotPlayed = []
        gameFinished = false
        gameHasWinner = false
    
        if (numberOfRounds % 2 !== 0) {
            playerNumber.textContent = 2
        } else {
            playerNumber.textContent = 1
        }
    
        numberOfRounds++
        roundsCount.textContent = numberOfRounds

        //! TURN OFF HOVER UNTIL COMPUTER GO THEN TURN IT BACK ON BUT DISABLE FOR THE BOXED CLICKED
        if (numberOfRounds % 2 === 0) {
            let firstBoxNumberPlayedByComputer = Math.ceil(Math.random() * 9)
                console.log('first box number played by computer', firstBoxNumberPlayedByComputer);
                boxNumbersPlayed.push(firstBoxNumberPlayedByComputer)
                boxNumbersClickedByPlayer2.push(firstBoxNumberPlayedByComputer)
                console.log("box numbers clicked by Player 2 on first go", boxNumbersClickedByPlayer2);
            boxes.forEach(box => { 
                if (firstBoxNumberPlayedByComputer === Number(box.dataset.num)){
                        box.removeEventListener("mouseover", handleHover) 
                        box.removeEventListener("mouseout", handleHoverOff)
                        box.removeEventListener("click", handleClickSinglePlayer)
                        box.style.cursor = "not-allowed"  
                        setTimeout(function() {
                            box.textContent = "O" 
                            box.classList.add("flip-horizontal-top")
                            console.log('array of numbers played',boxNumbersPlayed);
                            playerNumber.textContent = 1
                        }, 1000)
                }
                // setTimeout(function() {
                //     box.addEventListener("click", handleClickSinglePlayer)
                //     box.addEventListener("mouseover", handleHover) 
                //     box.addEventListener("mouseout", handleHoverOff)
                // }, 1000)
                
            })
            numberOfPlays = 1
        } else {
            numberOfPlays = 0
        }
    }
    
    playAgainBtn.addEventListener("click", resetGame)
}

singlePlayerMode.addEventListener("click", startSinglePlayerMode)







function startTwoPlayerMode() { //* FOR TWO PLAYER MODE
    singlePlayerMode.removeEventListener("click", startSinglePlayerMode)
    singlePlayerMode.style.backgroundColor = "grey"
    twoPlayerMode.classList.add("jello-horizontal")
    twoPlayerMode.removeEventListener("click", startTwoPlayerMode)
    singlePlayerMode.style.backgroundColor = "grey"
    twoPlayerMode.style.cursor = "not-allowed" 
    singlePlayerMode.style.cursor = "not-allowed" 
    // also change colour to show this button has been disabled

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
                    box.removeEventListener("click", handleClickTwoPlayer)
                    box.removeEventListener("mouseover", handleHover)
                    box.style.cursor = "not-allowed" 
                });
                resultsMessage.textContent = "Congratulations, Player 1 is the winner!"
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
                numberOfPlayer1wins++
                player1WinCount.textContent = numberOfPlayer1wins
                gameHasWinner = true
            } else if (doesPlayer2Win) {
                boxes.forEach(box => {
                    box.removeEventListener("click", handleClickTwoPlayer)
                    box.removeEventListener("mouseover", handleHover)
                    box.style.cursor = "not-allowed"   
                });
                resultsMessage.textContent = "Congratulations, Player 2 is the winner!"
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
                numberOfPlayer2wins++
                player2WinCount.textContent = numberOfPlayer2wins
                gameHasWinner = true
            } else if (numberOfPlays === 9) {
                gameCompletePopup.style.visibility = "visible"
                gameCompletePopup.classList.add("text-focus-in")
                turnMessage.style.visibility = "hidden"
            }
        })
        if (numberOfPlays === 9 && gameHasWinner === false) { 
            resultsMessage.textContent = "Awww, it's a tie"
            numberOfTies++
            tiesCount.textContent = numberOfTies
        }
    }
    
    function handleHover () {
        let boxHovering = event.target
        boxHovering.classList.add("pulsate-fwd")
        boxHovering.classList.add("hovering")

        if (numberOfRounds % 2 !== 0) {
            if (numberOfPlays % 2 !== 0) {
                boxHovering.textContent = "O"
            } else {
                boxHovering.textContent = "X"
            }
        } else {
            if (numberOfPlays % 2 !== 0) {
                boxHovering.textContent = "X"
            } else {
                boxHovering.textContent = "O"
            }
        }
    }

    boxes.forEach(box => {
        box.addEventListener("mouseover", handleHover)
    })

    function handleHoverOff () {
        let boxHovering = event.target
        boxHovering.textContent = ""
        boxHovering.classList.remove("hovering")
        boxHovering.classList.remove("pulsate-fwd")
    }

    boxes.forEach(box => {
        box.addEventListener("mouseout", handleHoverOff)
    })
    
    function handleClickTwoPlayer(event) {
        let boxClicked = event.target
        let boxNumberClicked = Number(boxClicked.dataset.num)
        numberOfPlays++
        boxClicked.classList.add("clicked")
        boxClicked.classList.add("flip-horizontal-top")
    
        if (numberOfRounds % 2 !== 0) {
            if (numberOfPlays % 2 !== 0) {
                boxClicked.textContent = "X"
                boxNumbersClickedByPlayer1.push(boxNumberClicked)
                playerNumber.textContent = 2
            } else {
                boxClicked.textContent = "O"
                boxNumbersClickedByPlayer2.push(boxNumberClicked)
                playerNumber.textContent = 1
            }
        } else {
            if (numberOfPlays % 2 !== 0) {
                boxClicked.textContent = "O"
                boxNumbersClickedByPlayer2.push(boxNumberClicked)
                playerNumber.textContent = 1
            } else {
                boxClicked.textContent = "X"
                boxNumbersClickedByPlayer1.push(boxNumberClicked)
                playerNumber.textContent = 2
            }
        }
    
        boxClicked.removeEventListener("click", handleClickTwoPlayer)
        boxClicked.removeEventListener("mouseover", handleHover) 
        boxClicked.removeEventListener("mouseout", handleHoverOff)
        boxClicked.style.cursor = "not-allowed"      
    
        checkIfPlayerWins()
    }
    
    boxes.forEach(box => {
        box.addEventListener("click", handleClickTwoPlayer)
    });

    function resetGame() {
        boxes.forEach(box => {
            box.textContent = ""
            box.addEventListener("click", handleClickTwoPlayer)
            box.addEventListener("mouseover", handleHover) 
            box.addEventListener("mouseout", handleHoverOff) 
            box.style.cursor = "pointer"
            box.classList.remove("hovering")
            box.classList.remove("clicked")   
            box.classList.remove("flip-horizontal-top")
            box.classList.remove("pulsate-fwd")
        })
        gameCompletePopup.style.visibility = "hidden"
        gameCompletePopup.classList.remove("text-focus-in")
        turnMessage.style.visibility = "visible"
        numberOfPlays = 0
        boxNumbersClickedByPlayer1 = []
        boxNumbersClickedByPlayer2 = []
        gameHasWinner = false
    
        if (numberOfRounds % 2 !== 0) {
            playerNumber.textContent = 2
        } else {
            playerNumber.textContent = 1
        }
    
        numberOfRounds++
        roundsCount.textContent = numberOfRounds
    }
    
    playAgainBtn.addEventListener("click", resetGame)

}

twoPlayerMode.addEventListener("click", startTwoPlayerMode)