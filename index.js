//declaring the variable sum
let sum = 0
let sumEl = document.getElementById("sum-el")


//declaring the cards variable
let cards = []
let cardsEl = document.getElementById("cards-el")
//declaring the booleans
let youWONTheBlackjack = false
let youAreNotOutOfTheGame = false

//displaying the message

let message =" "
 let messageEl = document.getElementById("message-el")

 function getRandomCard() {
  let i = Math.floor(Math.random() * 13) + 1
  if(i > 11){
    return 10
  }
  else if(i === 1){
    return 11
  }
  else{ 
    return i
  }
 }

 //displaying the player's name and no of chips
let  playerEl = document.getElementById("player-el")
 player = {
  name:"Esther Natalia:",
  chips:"$10000"
 }
playerEl.textContent= player.name + " " + player.chips
function startGame(){
  if(youAreNotOutOfTheGame == true){
      let firstCard  = getRandomCard()
      let secondCard = getRandomCard()
       sum = firstCard + secondCard
       cards = [firstCard, secondCard]

    }
  
   

    renderGame()

 }
function renderGame(){
   
 // setting the conditions of the game 
 
 if (sum < 21)
 { message = " Do you want to draw a NEW card ?"
   youAreNotOutOfTheGame = true
 }
 else if (sum === 21){
   message = "You WON the blackjack"
   youWONTheBlackjack = true
  
}else{
   message = "YOU'RE OUT OF THE GAME!"
   youAreNotOutOfTheGame = false
 }

    sumEl.textContent = "sum:" + sum 
    
    cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++)
    {
      cardsEl.textContent += cards[i] + "  "
    }
    messageEl.textContent = message
    
}

function newCard(){
  if( youWONTheBlackjack 
    === false &&  youAreNotOutOfTheGame === true ) {
    let card= getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    
  }
   
}














