let boxes = document.querySelectorAll(".box")
let turnMessage = document.querySelector(".turn-message")
let playerNumber = document.querySelector(".player-number") 
let box1 = document.querySelector(".box-1")
let box2 = document.querySelector(".box-2") 
let box3 = document.querySelector(".box-3") 
let box4 = document.querySelector(".box-4") 
let box5 = document.querySelector(".box-5") 
let box6 = document.querySelector(".box-6") 
let box7 = document.querySelector(".box-7")  
let box8 = document.querySelector(".box-8") 
let box9 = document.querySelector(".box-9") 
let gameCompletePopup = document.querySelector(".game-complete-popup")
let resultsMessage = document.querySelector(".results-message")
let playAgainBtn = document.querySelector(".play-again-button")

let numberOfTurns = 0
let waysToWin = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
let boxNumbersClickedByPlayer1 = []
let boxNumbersClickedByPlayer2 = []

// let doesPlayer1win = false

// function checkIfPlayer1Wins(doesPlayer1win) {
//     waysToWin.forEach(winPattern => {
//         console.log('winPattern', winPattern);
//         winPattern.every(number => {
//             if (boxNumbersClickedByPlayer1.length >= 3 && boxNumbersClickedByPlayer1.includes(number) === true) {
//                 console.log('potato', boxNumbersClickedByPlayer1.includes(number));
//             return boxNumbersClickedByPlayer1.includes(number)
//             // if true for all three numbers then return doesPlayer1win = true
//             }
            
//         })
//         //if true turn doesPlayer1win into true
//     })
// } // this function returns true or false

// function checkIfPlayer1Wins(doesPlayer1win) {
//     while (doesPlayer1win = false) { 
//         waysToWin[i].every(number => {
//             doesPlayer1win = boxNumbersClickedByPlayer1.includes(number)
//         })
//         i++
//     }
// }



function handleClick(event) {
    let boxClicked = event.target
    console.log('event target', event.target);
    numberOfTurns++
    let boxNumberClicked = Number(boxClicked.dataset.num)
    console.log('number of turns', numberOfTurns);
    //swap between players and swap between X and O
    if (numberOfTurns % 2 !== 0) {
        boxClicked.textContent = "X"
        boxNumbersClickedByPlayer1.push(boxNumberClicked)
        console.log('player 1', boxNumbersClickedByPlayer1);
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        boxNumbersClickedByPlayer2.push(boxNumberClicked)
        console.log('player 2', boxNumbersClickedByPlayer2);
        playerNumber.textContent = 1 
    }
    
    boxClicked.removeEventListener("click", handleClick)     //so that you can only click box once 

    // let arr = [1, 2, 3]
    // let arr2 = [1, 2, 3, 4]
    // let check = arr.every(number => {
    //     console.log('boxes clicked inside check', boxNumbersClickedByPlayer1);
    //     return boxNumbersClickedByPlayer1.includes(number)
    // })
    // console.log(check);


    function checkIfPlayerWins() {
        waysToWin.forEach(winPattern => {
            console.log('winPattern', winPattern);
            winPattern.every(number => {
                if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X")) {
                    boxes.forEach(box => {
                        box.removeEventListener("click", handleClick)
                    });
                    resultsMessage.textContent = "Congratulations, Player 1 is the winner!"
                    gameCompletePopup.style.visibility = "visible"
                    turnMessage.style.visibility = "hidden"

                    console.log('potato', boxNumbersClickedByPlayer1.includes(number));
                    return boxNumbersClickedByPlayer1.includes(number)
                }
            })
            //if true turn doesPlayer1win into true
        })
    } // this function returns true or false
    // console.log('does player 1 win?', checkIfPlayer1Wins(doesPlayer1win));

    //!  now to hard code the wins... first with X's
    // if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
    // ? if (checkIfPlayerWins()) {
    if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X")) {
        // make it such you can't click anymore boxes
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        //show game complete message
        resultsMessage.textContent = "Congratulations, Player 1 is the winner!"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        //? Now with O's
    } else if ((box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") || (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") || (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") || (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") || (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") || (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O")) {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        resultsMessage.textContent = "Congratulations, Player 2 is the winner!"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
    } else if (numberOfTurns === 9) { //FINALLY number of turns 
        resultsMessage.textContent = "Awww, it's a tie"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
    }
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
        resultsMessage.textContent = "Congratulations! The winner is Player"
        boxNumbersClickedByPlayer1 = []
        boxNumbersClickedByPlayer2 = []
    });
}

playAgainBtn.addEventListener("click", resetGame)

