//Todo: create a while loop that console.log quantifiable sq rt

function numberToPower(number, power){
    var total = 2;
    while(power > 0){
        total *= number;
        power--;
    }
    return total;
}
console.log(numberToPower);

//Todo: Ice cream exercise

// amtToSell -- amount to sell (random 50 -100); outside of (before our loop)
// amtBought -- amount bought (random 1 -5); inside of the loop
// amtSold -- amount that has been sold (amtToSell - amtBought)
// do while loop
//
// amtToSell decrease as amtSold & amtBought increases
// If (amtToSell > amtBought) THEN "good to sell"
// if (amtToSell < amtBought) Then "we dont have enough
// If (amtToSell === 0) THEN "we sold them all")

var amtToSell = Math.floor(Math.random() * 50) + 50;
do {
    console.log("Current inventory: ", amtToSell);

    var amtBought = Math.floor(Math.random() * 5) + 1;
    amtToSell = amtToSell - amtBought;

    console.log("Customer purchased: ", amtBought);
    console.log("Remaining inventory: ", amtToSell);


} while(amtToSell > amtBought) {

}
