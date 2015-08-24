// jshint devel:true
console.log('\'Allo \'Allo!');

//array
var playerTurn = 1;     //we set a variable to remember the va
var squares = [0,0,0,
			   0,0,0,
			   0,0,0]   //Setting the 0 to the players ID,

// we made a player that can click, whos turn

$('.square').bind('click', function(event){  //this allows you to click once and not change the character
{$(this).unbind('click');}
	console.log($(this).attr('id'))   	//getting the iD that I set in the DIV, turning it into a number instead of a word
		var id = ($(this).attr('id'))   // saving what I printed into an ID 
		id = parseInt(id)				//parse int takes  a string and turns it into an integer
		squares[id] = playerTurn
		playerTurn == 1 || playerTurn == 2
		console.log(squares)

	if (playerTurn == 1) { 
		$(this).css({'background-image': 'url(/images/drakehead.jpg)',
					 'background-attachment': 'cover',
     				 'background-size': '100%'}); 
		playerTurn = 2  	}

		else if (playerTurn == 2) {
		$(this).css({'background-image': 'url(/images/meekhead.jpg)',
					 'background-attachment': 'cover',
     				 'background-size': '100%'});
		playerTurn = 1
	}
		
// horizontal
	if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] == squares[2] && squares[0] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
	if (squares[3] == squares[4] && squares[4] == squares[5] && squares[3] == squares[5] && squares[3] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
	if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6] == squares[8] && squares[6] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
// vertical 
	if (squares[0] == squares[3] && squares[3] == squares[6] && squares[0] == squares[6] && squares[0] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
	if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] == squares[7] && squares[1] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
	if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] == squares[8] && squares[2] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
// diagonal
	if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0] == squares[8] && squares[0] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}
	if (squares[2] == squares[4] && squares[4] == squares[6] && squares[2] == squares[6] && squares[2] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}

	

})
//ideas
//background url instead of red
//look in console tells you the ID that you click on the event
//everytime I click then the computer doesnt also have to move. 
//were telling it do something
//every time I move it does something
//then delay the move... 
//use jquery to say who wins

//Selecting every div named square, you click it says something

//click div change player turns // single equal clicks it to the variable