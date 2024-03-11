class Game {

    start() {

        let gameOver = false;


        // This array contains each box in the game grid.  Each box is represented by a <div> element.
    
        let boxes =[]; 

        boxes.push($("#box-0"));
        boxes.push($("#box-1"));
        boxes.push($("#box-2"));
        boxes.push($("#box-3"));
        boxes.push($("#box-4"));
        boxes.push($("#box-5"));
        boxes.push($("#box-6"));
        boxes.push($("#box-7"));
        boxes.push($("#box-8"));
        

        // This will hold each <p> element that contains the letter of the player who chose its parent box

        let cells =[]; 

        cells.push($("#cell-0"));
        cells.push($("#cell-1"));
        cells.push($("#cell-2"));
        cells.push($("#cell-3"));
        cells.push($("#cell-4"));
        cells.push($("#cell-5"));
        cells.push($("#cell-6"));
        cells.push($("#cell-7"));
        cells.push($("#cell-8"));


        // Let's assign a variable to the start new game button
        
        let newGameButton = $("#new-game");


        // When someone clicks on the start new game button, the page will reload.

        newGameButton.on('click', () => {
            window.location.reload();
        });

        // Let's next assign a variable to the alert area

        let alert = $("#alert");


        // Let's assign a variable to the message area

        let message = $("#message");


        // Now let's empty out all the <p> elements that hold the letters of each player who picks a box.

        for (let cell of cells) {
            cell.text("");
        }


        // Let's empty the alert area

        alert.empty();


        // Let's set the message for the start of the game

        message.text("Welcome to Tic-Tac-Toe! Player X goes first.  Please choose a box.");


        // This sets the current player for the start of the game

        let currentPlayer = 'X';


        // This sets a listener on every box.  When someone clicks a box, their letter gets assigned to the <p>
        // element within that box and the game is evaluated to see if somebody won.

        // If nobody has yet one, the opponent becomes the current player and the game continues.

        for (let box of boxes) {
                box.on('click', () => {
         // If someone clicks on a box after a game has ended and before a new one begins, nothing will happen
                if (gameOver === false) {
         // Sets the content of the box that was clicked to the letter of the current player
                    box.find('p').text(currentPlayer);
                    if (   (cells[0].text() === currentPlayer && cells[1].text() === currentPlayer  && cells[2].text() === currentPlayer)
                                ||
                            (cells[3].text() === currentPlayer && cells[4].text() === currentPlayer  && cells[5].text() === currentPlayer)
                                ||
                            (cells[6].text() === currentPlayer && cells[7].text() === currentPlayer  && cells[8].text() === currentPlayer)
                                ||
                            (cells[0].text() === currentPlayer && cells[3].text() === currentPlayer  && cells[6].text() === currentPlayer)
                                ||
                            (cells[1].text() === currentPlayer && cells[4].text() === currentPlayer  && cells[7].text() === currentPlayer)
                                ||
                            (cells[2].text() === currentPlayer && cells[5].text() === currentPlayer  && cells[8].text() === currentPlayer)
                                ||
                            (cells[0].text() === currentPlayer && cells[4].text() === currentPlayer  && cells[8].text() === currentPlayer)
                                ||
                            (cells[2].text() === currentPlayer && cells[4].text() === currentPlayer  && cells[6].text() === currentPlayer)
                            ) {
                                gameOver = true;
                                alert.html('<div class="alert alert-success my-5 mx-5 h4" role="alert"><p>Player ' + currentPlayer 
                                          + ' wins the game!</p></div>');
                                message.text("Hit the Start New Game button to play again.");
                            }
                    else {
         // If none of the boxes are vacant, the game ends in a tie
                        let vacant = false;
                        for (let cell of cells) {
                            if (cell.text() != 'X' && cell.text() != 'O') {
                                vacant = true;
                            }
                        }
                        if (vacant === false) {
                            gameOver = true;
                            alert.html('<div class="alert alert-success my-5 mx-5 h4" role="alert"><p>The game ends in a tie!</p></div>');
                            message.text("Hit the Start New Game button to play again.");
                        }
                        else {
                            if (currentPlayer === 'X') {
                                currentPlayer = 'O';
                            }
                            else {
                                currentPlayer = 'X';
                            }
                            message.text(`Okay, good choice. It's now player ${currentPlayer}'s turn.`);
                        }
                    }
                }
            })
        };
    }
}


// Here is where we will create an instance of the game and start it.

let game = new Game();
game.start();