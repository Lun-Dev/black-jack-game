let player = {
    name: "John",
    chips: 150
}
let cards = [] //array , list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function randomCard() {
    let randomDraw = Math.floor(Math.random() * 13) + 1
    if (randomDraw > 10) {
        return 10
    } else if (randomDraw === 1) {
        return 11
    } else {
        return randomDraw
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            message = "Do you want to draw a new card?";
            hasBlackJack === false;
        } else if (sum === 21) {
            message = "You've got Blackjack!";
            hasBlackJack = true;
            player.chips += 100;
            playerEl.textContent = player.name + ": $" + player.chips
        } else {
            message = "You're out of the game!";
            isAlive = false;
            player.chips -= 10;
            playerEl.textContent = player.name + ": $" + player.chips
        }
        messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else if (isAlive === false && hasBlackJack === false) {
        messageEl.textContent = "Game Over"
    }

}
