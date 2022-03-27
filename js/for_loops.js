// //Todo: Exercise 2 (complete)

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        var solution = num * i;
        console.log(num + " x " + i + " = " + solution);
    }
}
showMultiplicationTable(7);

// //Todo: exercise 3 (complete)

for (var i = 1; i <= 10; i++){
    var randomNumber = Math.floor(Math.random() * (200 -20) + 20);
    console.log(randomNumber);
    if (i % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd")
    }
}

//Todo: Exercise 4. (Complete)

var n = 9; // height of pattern
var string = "";
// External loop
for (var i = 1; i <= n; i++) {
    // Internal loop
    for (var j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

// //Todo: Exercise 5 (complete)

for (var i = 100; i > 0; i -= 5){
    console.log(i);
}