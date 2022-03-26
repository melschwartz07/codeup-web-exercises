//Todo: BREAK AND CONTINUE

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
// continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

// function showMultiplicationTable(num) {
//     for (var i = 1; i <= 10; i++) {
//         var solution = num * i;
//         console.log(num + " x " + i + " = " + solution);
//     }
// }
// showMultiplicationTable(7);
//
// console.log(randomNumber);
// if (i % 2 === 0) {
//     console.log(randomNumber + " is even");
// } else {
//     console.log(randomNumber + " is odd")
// }
// }

var userNum = prompt("Please enter an odd number between 1-50.");

function oddNumbers() {


    for (var i = 1; i < 50; i++) {

        if (i % 2 === 0) {
            continue;
        }

        alert('Here is an odd number: ' + i);
    }
}