let playerName = 'Kurt';
let playerAge = 16;
let playerGender = 'Male'; 
let playerColor = 'purple';
console.log('playerName', playerName);
playerName = 'Chloe';
console.log('playerName', playerName);
let landscape = ['ocean', 'mountain', 'desert', 'valley','city'];
console.log(landscape[1],landscape[2]);
let playerScore = 0
function displayScore (playerScore){
    playerScore++
    console.log(playerScore)
}
displayScore(4);
function checkOddOrEven(playerScore) {
    if (playerScore % 2 === 0) {
        console.log(playerScore + " is even.");
    } else {
        console.log(playerScore + " is odd.");
    }
}
displayScore (6);


checkOddOrEven(playerScore);