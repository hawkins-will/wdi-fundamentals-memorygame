/*if (cardTwo == cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
}*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		gameBoard.appendChild(newCard);
	}
};

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'queen') {
		this.innerHTML = "<img src='queen.png' alt= 'Queen of Spades'>"; 
	} else {
		this.innerHTML = "<img src='king.png' alt= 'King of Diamonds'>"; 
	}
	if (cardsInPlay.length == 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("It's a match!");
	} else {
		alert("Try Again!");
	}
};

createBoard();

//* I tried figuring out how to clear the board but could not for the life of me figure it out *//