//declaring the variable sum
let firstCard  = 11
let secondCard = 6
let sum = firstCard + secondCard
let sumEl = document.getElementById("sum-el")


//declaring the cards variable
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")

//displaying the message

let message =" "
 let messageEl = document.getElementById("message-el")


function startGame(){
    renderGame()
 }
function renderGame(){
   
 // setting the conditions of the game 
 
 if (sum < 21)
 { message = " Do you want to draw a NEW card ?"
 }
 else if (sum === 21){
   message = "You WON the blackjack"
}else{
   message = "YOU'RE OUT OF THE GAME!"
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
    let card= 4
    sum += card
    cards.push(card)
    renderGame()
}














