# Tic Tac Toe 
Hello, welcome to my **first every project**. :tada: This is currently a work in progress and I hope I can deliver something workeable soon... To see my game, click here:
https://pages.git.generalassemb.ly/piknik/project1_tic_tac_toe/

## The Thought Process 
I started off by creating a wireframe of how I would like to structure my page and initial thoughts: https://whimsical.com/W5MCxfLSh4HVPx8P7Ck63Vs
![](README%20images/Screenshot%201%20Initial%20Planning%202023-02-22%20at%201.55.56%20pm.png)
https://whimsical.com/W5MCxfLSh4HVPx8P7Ck63Vs

## Goals for making the game 
These were the goals that I had set in order to get a functional game running: 
* Create a basic 3x3 grid where each grid/box responds to a click 
* Have a display which shows who's turn it is and changes once the player goes 
* Have the click function toggle between X and O in the boxes based on the player's turn 
* Once a box is clicked, the player cannot reclick the same box 
* Add condition statements so that when a win happens or if there is a draw, the game is finished 
* If there is a win, no more boxes can be clicked
* When the game is finished, there is a pop up message that reveals the results of the game and a "Play Again" button which resets the game

## Making my MVP 
[Making my MVP](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/d54b0414878379287eb949f341e99f591556204b) was a repetitive process for me as I found my self hard coding a lot to get a functional game working. This included: 
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
* Classing each box of the 9 separately and creating variables to return each element/box separately 
* Hard coding my Congratulations message in my HTML which lead to my [first bug](https://git.generalassemb.ly/piknik/project1_tic_tac_toe/commit/f86091a81da32e9c49f93c8f487707fcf6ed705f) :bug:
    ![bug 1](README%20images/First%20Bug%20Screenshot%202023-02-22%20at%204.19.49%20pm.png)
    *The message reads that it is a tie even though Player 2 has won*

    - My initial message was set as default for a win with a span to change the player number based on who won. 
    ```
    <p class="game-complete-message">Congratulations, Player <span class="winning-player-number"></span> has won!</p>
    ```
    - This worked well for the win conditions BUT if there was a draw, the message was overwritten with the draw message which wouldn't change if there was a win on the subsequent round. 
    ```
    gameCompleteMessage.textContent = "Awww, it's a tie"
    ```
    - My initial fix was to change the text content back to the default Congratulations message in my `resetGame()` function, but the span was still overwritten. 
    - I then changed the message to read different so that I could change the number at the end of the sentence. 
        - This also mean't adding CSS styling to ensure the two paragraph tags were still read in the same line. 
        - I also had to toggle between the visibility of the winning player number too which mean't an extra line in each of my if else conditions. It was a tedious fix for my initial MVP but it worked. 
    ```
    <p class="game-complete-message">Congratulations! The winner is Player </p> <p class="winning-player-number">1</p>
    ```


## Refactoring my MVP 

After my MVP was submitted- I removed the hard coded comment so that the comment can be adjusted in the JavaScript. I did this by combining all my possible winning conditions in my first if statemement using OR 

However, this lead to a very long if condition statement and I was looking  for ways to figure out how to shorten this...
- CONTINUE HERE 


## Adding some bonus features 
Now that my code was refactored, time for the fun part...  adding in some bonus features
https://whimsical.com/tic-tac-toe-wireframe-bonus-features-7SGCq5qfDiBGL6h2QrAP2V

# Keep track of multiple game rounds with a win counter
I added a win count for each player and a tie counter

## Known bugs
* The tie counter increments in 8's everytime there is a tie. A temporary fix is dividing this number by 8 so the number displayed is accurate.

## The Final Product 

## Some Changes I would like to make in future: 