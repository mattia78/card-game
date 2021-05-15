import Deck from "./deck.js"

const player1DeckElement = document.querySelector('.player1Deck')
const player2DeckElement = document.querySelector('.player2Deck')
const player3DeckElement = document.querySelector('.player3Deck')
const player4DeckElement = document.querySelector('.player4Deck')
const player5DeckElement = document.querySelector('.player5Deck')

const player1CardSlot = document.querySelector('.player1-card-slot')
const player2CardSlot = document.querySelector('.player2-card-slot')
const player3CardSlot = document.querySelector('.player3-card-slot')
const player4CardSlot = document.querySelector('.player4-card-slot')
const player5CardSlot = document.querySelector('.player5-card-slot')

let player1Deck, player2Deck, player3Deck, player4Deck, player5Deck

startGame()

function startGame() {
	const deck = new Deck()
	deck.shuffle()
	console.log(deck.cards)

	//const playerHand = Math.ceil(deck.numberOfCards / 5)
	player1Deck = deck.cards.slice(0,8)
	player2Deck = deck.cards.slice(8,16)
	player3Deck = deck.cards.slice(16,24)
	player4Deck = deck.cards.slice(24,32)
	player5Deck = deck.cards.slice(32,40)

// POPULATE THE HAND OF PLAYER1
	document.querySelector('.player1HandCard1').innerHTML = player1Deck[0].value + player1Deck[0].suit
	document.querySelector('.player1HandCard2').innerHTML = player1Deck[1].value + player1Deck[1].suit
	document.querySelector('.player1HandCard3').innerHTML = player1Deck[2].value + player1Deck[2].suit
	document.querySelector('.player1HandCard4').innerHTML = player1Deck[3].value + player1Deck[3].suit
	document.querySelector('.player1HandCard5').innerHTML = player1Deck[4].value + player1Deck[4].suit
	document.querySelector('.player1HandCard6').innerHTML = player1Deck[5].value + player1Deck[5].suit
	document.querySelector('.player1HandCard7').innerHTML = player1Deck[6].value + player1Deck[6].suit
	document.querySelector('.player1HandCard8').innerHTML = player1Deck[7].value + player1Deck[7].suit;


	//add red class to the proper suits
	const divs = document.querySelectorAll("div");
	for(let i = 0; i < divs.length; i++){
	   if(divs[i].innerHTML.includes("♦") || divs[i].innerHTML.includes("♥")) {
	       divs[i].classList.add("red");
	   }
	}

	console.log(player1Deck)
	console.log(player2Deck)
	console.log(player5Deck)

}


