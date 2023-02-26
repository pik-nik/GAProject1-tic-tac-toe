# Tic Tac Toe :x: :o:
Hello, welcome to my ***first ever project***! :tada: 

In a bit over 2 days, I created a Tic Tac Toe game using HTML/CSS/JavaScript.

Grab a friend (or foe) and check out my game here: 

https://pages.git.generalassemb.ly/piknik/project1_tic_tac_toe/

:construction: NOTE ONE PLAYER WORK IN PROCESS :construction:

## Goals :rocket:
These were the goals that I had set in order to get a functional game running: 
* Create a basic 3x3 grid where each grid/box responds to a click 
* Have a display which shows who's turn it is and changes once the player has gone
* Have the click function toggle between X and O in the boxes based on the player's turn 
* Once a box is clicked, the player cannot reclick the same box 
* Add condition statements so that when a win or draw happens, the game is finished 
* If there is a win, no more boxes can be clicked
* When the game is finished, there is a pop up message that reveals the results of the game and a "Play Again" button which resets the game

## Building my MVP :building_construction:

### The Thought Process :thought_balloon:
I started off by creating a wireframe to jot down initial thoughts and work out how I would like to structure my page. You can check out my wireframe here: https://whimsical.com/tic-tac-toe-wireframe-W5MCxfLSh4HVPx8P7Ck63V

I then started building the basic layout of my page.

![](README%20images/Screenshot%201%20Initial%20Planning%202023-02-22%20at%201.55.56%20pm.png)
*Initial planning replicating the styling of my wireframe using HTML/CSS*

### A lot of hard coding later...
[Making my MVP](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/d54b0414878379287eb949f341e99f591556204b) was a repetitive process for me as I found myself hard coding a lot to get a functional game working. This included: 
* Having my condition statement to determine who's turn it was based on the text content of the player number which then swapped in the same code block 
    ```
    if (playerNumber.textContent === "1") {
        boxClicked.textContent = "X"
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        playerNumber.textContent = 1 
    }
    ```
* Having multiple if else statements for each possible win condition for each player which meant I had 16 total when really only 3 was needed 
* Classing each of the 9 boxes separately and creating variables to return each element/box separately 
* Hard coding my congratulations message in my HTML which lead to my [first bug](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f86091a81da32e9c49f93c8f487707fcf6ed705f) :bug:
    - My initial message was set as default for a win with a span to change the player number based on who won. 
    ```
    <p class="game-complete-message">Congratulations, Player <span class="winning-player-number"></span> has won!</p>
    ```
    - This worked well for the win conditions BUT if there was a draw, the message was overwritten with the draw message which was added in JavaScript. This wouldn't update if there was a win on the subsequent round. 
    ```
    gameCompleteMessage.textContent = "Awww, it's a tie"
    ```

    ![bug 1](README%20images/First%20Bug%20Screenshot%202023-02-22%20at%204.19.49%20pm.png)
    
    *The message reads that it is a tie even though Player 2 has won*


    - My initial fix was to change the text content back to the default Congratulations message in my `resetGame()` function, but the span was still overwritten. 
    - I then changed the message to read different so that I could change the number at the end of the sentence. 
        - This also mean't adding CSS styling to ensure the two paragraph tags were still read in the same line. 
        - I also had to toggle between the visibility of the winning player number too which mean't an extra line in each of my if else conditions. It was a tedious fix for my initial MVP but it worked. 
    ```
    <p class="game-complete-message">Congratulations! The winner is Player </p> <p class="winning-player-number">1</p>
    ```
    - It was a messy fix good enough to get my MVP running but would definitely require refactoring.

[Check out my final MVP here](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f86091a81da32e9c49f93c8f487707fcf6ed705f)

## Refactoring my MVP :hammer_and_wrench:	
These where the fixes I made to refactor my MVP:
* [Removed the hard coded congratulations message](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/4790a722ed0490da94deec71d2cc584a428555a9) in the HTML file and added it in as a win statement.
* [Removed the repetitive win conditions](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f3dcebab1c47c8e9d27ea827e48519eba84fad4a) by adding the condition statements for Player 1 and Player 2 using OR (||). But this lead to a very long if condition... This was the resulting condition statement for Player 1 which was also repeated for Player 2:
```
if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
```
* To [shorten my if condition](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/72854317dcf50081badbca43842bb79a788081be), I created an array with all possible win combinations. I then created two empty arrays which would collect the boxes clicked by each player using data attribute and array push method. I then created a function to check if the array of boxes clicked by each player matched any of the winning combinations. 
    - Some issues I had with my initial code was my [function was returning undefined](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/c35be9091aab03e71018b66d433f067c834f0fdd) even though it was checking the array created by collected box numbers each time. 
    - [The fix](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/72854317dcf50081badbca43842bb79a788081be) was to define a variable which would return true or false based on wehther there was a match compared to the winning array combinations. This boolean would then be used in the above repetitive if statement to return the results message.
    - This also meant I could remove the classes and variables used to define each of the boxes separately.

[Check out my refactored code here](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/72854317dcf50081badbca43842bb79a788081be)

## Styling :art:
### Early Stages with MVP 
Styling with CSS was very basic in the early stages. I created a grid but made the height and width fixed on my grid and each individual box to ensure that I had a 9x9 square grid running so I could get started on the functionality of the game. This did the job but was not great for small screens.
### Now let's add a bit of colour
![](/README%20images/Styling%20Screenshot%202023-02-23%20at%2011.23.33%20pm.png)


## Bonus Features :gift:
Time for the fun part...  adding in some bonus features
I went back to the drawing board to think of features to add:
https://whimsical.com/tic-tac-toe-wireframe-bonus-features-7SGCq5qfDiBGL6h2QrAP2V

* Keep track of multiple game rounds with a [win counter](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/ba979167876b4633a2a3fc4537a20f6b50f4ef17)
* Added a [round counter](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/b3ebb66dd1e3cfdc1da110509746b694c225d2be) 
* Added a [hover feature](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/eca1676c78e1a86b25d4027a455d55842ec47fef) such that the box changes if on a potential move
* [Changed the cursor](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/788a996a3b89034bfa984bd9e4b9bf7a57c58d41) to "pointer" on the boxes and button and "not-allowed" if the boxes have already been clicked or if there is a win.
* Made [media queries](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/71d10d5e33f8eac1a81ce8b68e38541a7645c2c7) for tablet, phones and [large desktops](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f629260442f6fbeda0aa4171f4aeb5c3e4532532). 

    ![](README%20images/game%20on%20diff%20screens.jpg)

    *How the game looks on a 34" desktop monitor, 13" laptop and a 5.4" phone*

    :construction: *Note: while in the process of adding additional features, the game may not be as responsive as the original design* :construction:

* [Alternate starting players](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/54176825f63d864aa5748aecf3c13a3a38e934b6). The first move matters and in the original version there was bias for Player 1 to win as they started first in all rounds. In the updated version, the players alternate starting first in each round.
* [Added animations](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/6cf0094dde944f84bfa68b96889db60a56b5a939) thanks to [Animista](https://animista.net/play)
* [Single player mode](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/021c89f5434e6151a45e93b4dd62d7a478d751d7) to play against the computer
    - [Turn off hover/click on boxes while it is the computer's turn](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f388dee0f61d291303ca3b0cbffa4fe96ef24a29) 

## Bugs :bug:
* The tie counter incremented in 8's (most of the time) when there was a tie. 
    - [Temporary fix](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/ba979167876b4633a2a3fc4537a20f6b50f4ef17): Dividing `numberOfTies` by 8 worked most of the time but there were also some times it incremented in other numbers.
    - [2nd slightly better temporary fix](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/7d64cb5fc1ca87a212437156dfb090431c7a42f7): Due to time constraints, the best fix I could do was making the ties counter equal to number of rounds player subtract the number of times each player has won.
    ```
        } else if (numberOfTurns === 9) {
            resultsMessage.textContent = "Awww, it's a tie"
            gameCompletePopup.style.visibility = "visible"
            turnMessage.style.visibility = "hidden"
            // numberOfTies++
            // tiesCount.textContent = numberOfTies/8 
            tiesCount.textContent = numberOfRounds - numberOfPlayer1wins - numberOfPlayer2wins
        }
    ```
    - [Another fix I tried which didn't work](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/9aa3735630ed4bd71575a301fb0684052104bfcd) was removing the else if statement for `numberOfTurns === 9` out of the  `waysToWin.forEach()` function to it's own if statement in the `checkIfPlayerWins()` function to stop it from incrementing as it went through each of the 8 win patterns in the `waysToWin` array. This didn't work as if a player won on the 9th turn, the tie message would override the win message. 
    
    *Note: Since the above, I have [renamed](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/03f3bdcca5f657e4b0fb1f778873198592c3be77) `numberOfTurns` to `numberOfPlays` so the function `handleHover()` makes more sense*


    ![Bug: Ties message overrode the win message](/README%20images/Bug%20tie%20message%20override%20win%20Screenshot%202023-02-24%20at%2011.16.20%20am.png) 
    
    *The message says it's a tie when it is a win for Player 1 (X)*
    - Future changes needed: create better code for `tiesCount.textContent`
    - 26/02/2023 [RESOLVED](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/021c89f5434e6151a45e93b4dd62d7a478d751d7) :white_check_mark: Created a if statement ouside of the `waysToWin` array which is conditional to if the game doesn't have a winner.
    ```
        if (numberOfPlays === 9 && gameHasWinner === false) { 
        numberOfTies++
        tiesCount.textContent = numberOfTies
        }
    ```
* If there is a win on the 9th round, the message is "Awww, it's a tie" instead of "Congratulations, Player 1/2 is the winner!" BUT the win counter indicates that there was a winner 
    - 26/02/2023 [RESOLVED](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/021c89f5434e6151a45e93b4dd62d7a478d751d7) :white_check_mark: Moved `resultsMessage.textContent = "Awww, it's a tie"` out of the `waysToWin` array like the preceding bug and moved it to the same new if statement which is conditional to if the game doesn't have a winner.
* On single player mode, if there was a tie on an even round (2nd, 4th, 6th etc), the message doesnt appear. No issues with 2 player mode.
    - 26/02/2023 [RESOLVED](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/4da45e1cd2e297b1fa3d80f1170b6382380900fe) :white_check_mark: The `numberOfPlays` was incrementing after the second `checkIfPlayerWins()` hence on the 9th turn it wasn't meeting the requirements till after the function ran. The order was swapped around.
*  In single player, after player 2 wins, there is a 1.5second lag where you can still press the remaining button, if this causes X to win it will then increment the score Player 1 = 1 and Player 2 = 2 (as it will run through the two `checkIfPlayerWins())
    - 26/02/2023 [RESOLVED](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/70d3dd007c670f949ff1f9ca79a891d8f208dc5c) :white_check_mark: Set a function in a `setTimeOut` which runs 1 millisecond after the computer has it's turn. In the function, only reactivate the click and mouseover event listeners `if (gameFinished === false)`
* Computer playing over previously played boxes or playing multiple boxes at the same time on the second, fourth, sixth etc round. 
    - 26/02/2023 RESOLVED :white_check_mark: Needed to empty array of `boxNumbersNotPlayed` after first move is made

## Things to improve :memo:
* Change the grid so that it dyanamically changes size depending on the screen as it is currently width/length is currently fixed
    - I haven't found a way yet to be able to centre the grid on the page and not cause it to shrink without fixing the width/length.

## Future features I want to add :bulb:
* Let players customise names, profiles, board size and token
* Add audio 
* Change the fonts
* Add object to store names and win count

* turn off hover option when computer is playing 
* computer thinking adjust anywhere from 1-3 seconds?

* add animations on pick a mode so that player knows what to do first



