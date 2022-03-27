console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?")
console.log("The user entered: " + userInput);

alert(userInput + " is my favorite color, too!")

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var lilMerm = prompt("How many days did you rent The Little Mermaid?");
var broBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent Hercules?");

function priceForRentals(x, y, z){
    return "The total price of your rentals: $" + ((x * 3) + (y * 3) + (z * 3));
}
alert(priceForRentals(lilMerm, broBear, hercules));

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.

var google = 400;
var amazon = 380;
var facebook = 350;
var googDays = prompt("How many hours did you work for Google?");
var amazonDays = prompt("How many hours did you work for Amazon?");
var fbDays = prompt("How many hours did you work for Facebook?");

function payDay(x, y, z){
    return "Your paycheck is: $" + ((google * x) + (amazon * y) + (facebook * z));
}
alert(payDay(googDays, amazonDays, fbDays));

//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

