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


// // Todo: warm up exercise -- write a javascript function that accepts the 3 lengths of a triangle and outputs the triangles area
//
// var b = prompt("What is the length of the base of the triangle?");
// var h = prompt("What is the height of the triangle?");
// var formula = ((b *h) / 2)
// function triangleArea(calcArea){
//     return ("The area of the triangle is " + formula);
// }
//
// alert(triangleArea((b * h) / 2));

// var side1 = prompt("What is the length of side 1?");
// var side2 = prompt("What is the length of side 2?");
// var side3 = prompt("What is the length of side 3?");
// var formulaS = ((side1 + side2 + side3) / 2);
// var formulaA = (Math.sqrt(formulaS(formulaS - side1) * (formulaS - side2) * (formulaS - side3)));
// function triangleArea(calcArea){
//     return ("The area of the triangle is " + formulaA);
// }
// alert(triangleArea(formulaA));

