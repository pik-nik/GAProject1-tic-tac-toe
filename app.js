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
let gameCompleteMessage = document.querySelector(".game-complete-message")
let winningPlayerNum = document.querySelector(".winning-player-number")
let playAgainBtn = document.querySelector(".play-again-button")

let numberOfTurns = 0
function handleClick(event) {
    console.log("clicking");
    let boxClicked = event.target
    console.log(event.target);
    numberOfTurns++
    console.log(numberOfTurns);
    //swap between players and swap between X and O
        //? THINK OF A WAY TO MAKE THIS MORE READABLE AND REUSEABLE NOT USING IF STATEMENT BUT TRUE OR FALSE?
    if (playerNumber.textContent === "1") {
        boxClicked.textContent = "X"
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        playerNumber.textContent = 1 
    }
    //so that you can only click box once 
    boxClicked.removeEventListener("click", handleClick)
    //?  now to hard code the wins... first with X's
    if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") {
        // make it such you can't click anymore boxes
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        //show game complete message
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    }
    else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
    } else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 1
        //? Now with O's
    } else if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    }
    else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    } else if (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O") {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        winningPlayerNum.textContent = 2
    //FINALLY number of turns 
    } else if (numberOfTurns === 9) {
        gameCompleteMessage.textContent = "Awww, it's a tie"
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
        turnMessage.style.visibility = "complete"
        numberOfTurns = 0
    });
}

playAgainBtn.addEventListener("click", resetGame)

