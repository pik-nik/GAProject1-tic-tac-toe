# Tic Tac Toe 
Hello, welcome to my **first every project**. This is currently a work in progress and I hope I can deliver something workeable soon... To see my game, click here:
https://pages.git.generalassemb.ly/piknik/project1_tic_tac_toe/

## The Thought Process 
I started off by creating a wireframe of how I would like to structure my page and initial thoughts: https://whimsical.com/W5MCxfLSh4HVPx8P7Ck63Vs
![](README%20images/Screenshot%201%20Initial%20Planning%202023-02-22%20at%201.55.56%20pm.png)
https://whimsical.com/W5MCxfLSh4HVPx8P7Ck63Vs

## Making my MVP 
Making my MVP was a repetitive process for me as I found my self hard coding a lot to get a functional game working. This included: 
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
* Hard coding my Congratulations message in my HTML which lead to my first bug :bug:
    - My initial message was set as default for a win with a span to change the player number based on who won. 
    ```
    <p class="game-complete-message">Congratulations, Player <span class="winning-player-number"></span> has won!</p>
    ```
    - This worked well for the win conditions BUT if there was a draw, the message was overwritten with the draw message which wouldn't change if there was a win on the subsequent round. 
    ```
    gameCompleteMessage.textContent = "Awww, it's a tie"
    ```
    -My initial fix was to change the text content back to the default Congratulations message in my `resetGame()` function, but the span was still overwritten. 
    - I then changed the message to read different so that I could change the number at the end of the sentence.  
    ```
    <p class="game-complete-message">Congratulations! The winner is Player </p> <p class="winning-player-number">1</p>
    ```
    This also mean't adding CSS styling to ensure the two paragraph tags were still read in the same line. 
    I also had to toggle between the visibility of the winning player number too which mean't an extra line in each of my if else conditions. It was a tedious fix for my initial MVP but it worked. 


## Refactoring my MVP 

After my MVP was submitted- I removed the hard coded comment so that the comment can be adjusted in the javascript. I did this by combining all my possible winning conditions in my first if statemement using OR 

However, this lead to a very long if condition statement and I was looking  for ways to figure out how to shorten this...




## The Final Product 

## Some Changes I would like to make in future: 