//Todo: Ice cream exercise

// amtToSell -- amount to sell (random 50 -100); outside of (before our loop)
// amtBought -- amount bought (random 1 -5); inside of the loop
// amtSold -- amount that has been sold (amtToSell - amtBought)
// do while loop

// amtToSell decrease as amtSold & amtBought increases
//If (amtToSell > amtBought) THEN "good to sell"
//if (amtToSell < amtBought) Then "we dont have enough
// If (amtToSell === 0) THEN "we sold them all")

var amtToSell = Math.floor(Math.random() * 50) + 50;
do {
    console.log("amtToSell BEFORE: ", amtToSell);

    var amtBought = Math.floor(Math.random() * 5) + 1;
    amtToSell = amtToSell - amtBought;

    console.log("amtToSell AFTER: ", amtToSell);
    console.log("amtBought: ", amtBought);

} while(amtToSell > amtBought) {

}
