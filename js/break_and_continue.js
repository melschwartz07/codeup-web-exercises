//Todo: BREAK AND CONTINUE

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue
// prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var userNum = 3;
console.log("Number to skip is: " + userNum);

for (var i = 1; i < 50; i++){
    if (i % 2 !== 0){
        console.log("Here is an odd number: " + i);
        continue;
    } else if (i == userNum) {
        console.log("Yikes! Skipping number: " + userNum);
    }
}
