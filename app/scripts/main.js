// jshint devel:true
console.log('\'Allo \'Allo!');

//array
var playerTurn = 1;
var squares = [0,0,0,
			   0,0,0,
			   0,0,0]   //setting the 0 to the players ID, 


// we made a player that can click, whos turn

$('.square').click(function(event){

	console.log($(this).attr('id'))   	//getting the iD that I set in the DIV, turning it into a number instead of a word
		var id = ($(this).attr('id'))   // saving what I printed into an ID 
		id = parseInt(id)				//parse int takes  astring and turns it into an integer
		squares[id] = playerTurn
		console.log(squares)

	if (playerTurn == 1) { 
		$(this).css({'background-image': 'url(/images/drakehead.jpg)',
					 'background-attachment': 'cover',
     				 'background-size': '100%'});
		playerTurn = 2 	
	} else if (playerTurn == 2) {
		$(this).css({'background-image': 'url(/images/meekhead.jpg)',
					 'background-attachment': 'cover',
     				 'background-size': '100%'});
		playerTurn = 1
	}


	if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] == squares[2] && squares[0] != 0){  //have to do more because they all equal zero
		console.log('player wins')
		console.log(playerTurn)
	}

})

//background url instead of red
//look in console tells you the ID that you click on the event
//everytime I click then the computer doesnt also have to move. 
//were telling it do something
//every time I move it does something
//then delay the move... 



//use jquery to say who wins

//Selecting every div named square, you click it says something

//click div change player turns // single equal clicks it to the variable