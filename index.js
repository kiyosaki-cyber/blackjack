//declaring the vaariable sum
let firstCard  = 11
let secondCard = 11
let sum = firstCard + secondCard
let sumEl = document.getElementById("sum-el")


//declaring the cards variable
let cards = "cards:" + firstCard + " , " + secondCard
let cardsEl = document.getElementById("cards-el")


//displaying the message
 let messageEl = document.getElementById("message-el")

 // setting the conditions of the game 
 if (sum === 21){
    message = "You WON the blackjack"
    
 }
 else if (sum > 21){
    message = "You have lost the blackjack and OUT OF THE GAME"
 }
 else{
    message = " Do you want to draw a NEW card"

 }


//making the button funtion on click
let buttonEl = document.getElementById("button-el")

function startGame(){
    buttonEl.textContent = "welcome to blackjack"
    sumEl.textContent = "sum:" + sum 
    cardsEl.textContent = cards
    messageEl.textContent = message
}
