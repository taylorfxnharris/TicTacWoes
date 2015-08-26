// jshint devel:true

//array
var playerTurn = 1; //we set a variable to remember the va
var squares = [0, 0, 0,
        0, 0, 0,
        0, 0, 0]; //Setting the 0 to the players ID,
var player; //telling the script we are creating a variable.
// var winner;
// we made a player that can click, whos turn

$('.square').one('click', function(event) { //allows one click
    //this allows you to click once and not change the character
    console.log
    ($(this).attr('id')); //getting the iD that I set in the DIV, turning it into a number instead of a word
    var id=($(this).attr('id'));// saving what I printed into an ID 
    id = parseInt(id); //parse int takes  a string and turns it into an integer, I have to make sure its an integer
    squares[id] = playerTurn;
    (playerTurn === '1' || playerTurn === '2'); //
    console.log(squares);

    //modulo
    // horizontal
    // function
    //Winner
    //clear out HTML



    if (playerTurn === 1) {
        $(this).css({
            'background-image': 'url(/images/drakehead.jpg)',
            'background-attachment': 'cover',
            'background-size': '100%'
        });
        (playerTurn = 2);

    } else if (playerTurn === 2) {
        $(this).css({
            'background-image': 'url(/images/meekhead.jpg)',
            'background-attachment': 'cover',
            'background-size': '100%'
        });
        (playerTurn = 1);
    }
    // else if (player == )
    //DRYYYYY THIS UP ONE DAY JESUS, TAYLOR

    if (squares[0] === squares[1] && squares[1] === squares[2] && squares[0] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        //we make another statement with a variable for the sound for drake or meek

        // add breaks break the cycle break the code, exit, and reset the board, grabbing all divs, set HTML to an empty string.remvoe whatever is within the css remove it
        console.log(player) //not on variables
    } else if (squares[3] === squares[4] && squares[4] === squares[5] && squares[3] === squares[5] && squares[3] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    } else if (squares[6] === squares[7] && squares[7] === squares[8] && squares[6] === squares[8] && squares[6] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    }
    // vertical 
    else if (squares[0] === squares[3] && squares[3] === squares[6] && squares[0] === squares[6] && squares[0] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] === squares[7] && squares[1] !== 0)  { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] === squares[8] && squares[2] !== 0)  { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    }
    // diagonal
    else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[0] === squares[8] && squares[0] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)
    } else if (squares[2] === squares[4] && squares[4] === squares[6] && squares[2] === squares[6] && squares[2] !== 0) { //have to do more because they all equal zero
        player = (playerTurn % 2 === 0 ? 'Drake' : 'Meek Mill') //it knows about the variable and equals the result
        $('.winner').text(player + ' wins!');
        window.setTimeout(reset, 3000);
        console.log(playerTurn)

    } else if ((squares[0] && squares[1] && squares[2] && squares[3] && squares[4] && squares[5] && squares[6] && squares[7] && squares[8]) !== 0) {
        $('.winner').text('It\'s a tie');
        window.setTimeout(reset, 3000);
        console.log(playerTurn);
    }



    //its a tie


});

$('.reset').click(function() { //reset to clear before game ends
    reset();
});

var reset = function() {
    squares = [0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    $('.winner').removeAttr('winner');
    $('.winner').text(''); //resets winner text
    // reset . winner as well
    console.log(squares);
    $('.square').removeAttr('style'); //removing the styling but now add the bind
    //logic to reset board
    document.location.reload() //reloads the page when resetting
};
// jquery clear all images and rebind squares
// reset square array
//reset
// add a function that would clear 
//ideas
//order is important winner
//background url instead of red
//look in console tells you the ID that you click on the event
//everytime I click then the computer doesnt also have to move. 
//were telling it do something
//every time I move it does something
//then delay the move... 
//use jquery to say who wins
//Selecting every div named square, you click it says something
//click div change player turns // single equal clicks it to the variable
