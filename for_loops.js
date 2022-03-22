//Todo: Exercise 2 (complete)

for (var i = 1; i <= 10; i++) {
        console.log(7 + " x " + i + " = " + (7*i));
    }

//Todo: exercise 3 (still working)


for (var i = 20; i <= 200; i++){
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd")
    }
}

//Todo: Exercise 4. (Complete)

let n = 9; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

//Todo: Exercise 5 (complete)

for (var i = 100; i > 0; i -= 5){
    console.log(i);
}


// Todo: warm up exercise -- write a javascript function that accepts the 3 lengths of a triangle and outputs the triangles area

var b = prompt("What is the length of the base of the triangle?");
var h = prompt("What is the height of the triangle?");
var formula = ((b *h) / 2)
function triangleArea(calcArea){
    return ("The area of the triangle is " + formula);
}

alert(triangleArea((b * h) / 2));

// var side1 = prompt("What is the length of side 1?");
// var side2 = prompt("What is the length of side 2?");
// var side3 = prompt("What is the length of side 3?");
// var formulaS = ((side1 + side2 + side3) / 2);
// var formulaA = (Math.sqrt(formulaS(formulaS - side1) * (formulaS - side2) * (formulaS - side3)));
// function triangleArea(calcArea){
//     return ("The area of the triangle is " + formulaA);
// }
// alert(triangleArea(formulaA));

