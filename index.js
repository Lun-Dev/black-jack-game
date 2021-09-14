// let firstCard = 10
// let secondCard = 11

function start() {
    let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    console.log(firstCard)
    console.log(secondCard)
    let sum = firstCard + secondCard
    console.log(sum)
        if (sum < 21) {
            console.log("do you want new card")
        } else if (sum === 21) {
            console.log("blackjack")
        } else {
            console.log("bust")
}
}

