//Warm up

// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number

// function isPrime(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function display(n) {
//     var arr = [2];
//     for (var i = 3; i < n; i+=2) {
//         if (isPrime(i) ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr); // use arr result on your own
// }
//
// display(50);





// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]

var a = [1, 2, 3];
var b = [3, 4, 5];

function printArray(x, y){

}

var i = 20;
while (i >= 0) {
    console.log(i);
    i--;
}

// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']


function isTrue(input) {
    return (input === true);
}

function isFalse(input) {
    return (input === false);
}

function not(input) {
    return !input; }

function addOne(input) {
    var realNumber = Number(input);
    return realNumber += 1;
}

function isEven(input) {
    if(input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(a, b) {
    if(a === b) {
        return true;
    } else {
        return false;
    }
}

function isEqual(a, b) {
    return (a == b);
}


function or(a, b) {
    return (a || b);
}

function and(a, b) {
    return (a && b);
}

function concat(a, b) {
    return a.toString() + b.toString();
}


// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

var myInput = 931

function makeArray(num){
    return String(num).split("");
}
makeArray(myInput);

// Write a function that takes an object (a) as argument
// Return an array with all object keys

var myObj = {a:1,b:2,c:3};

var objToArray = (input) => {
    let result = Object.keys(input);
    return result;
}
objToArray(myObj);

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

var myStr = 'abcdefg';
var removeStr = (input) => {
    let temp = input.split("");
    for(i=0;i<3;i++) {
        temp.shift();
    } return temp.join("");
}
console.log(removeStr(myStr));

//Write a function that accepts a string and returns a map with the strings
// character frequency.
// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }

// var myArr = ["b","a", "n","a","n","a"];
// var result = [];
// function stringMap(input) {
//     for(let i = 0; i < myArr.length; i++) {
//         result.push(input[i]);
//     } //return result;
//     // for(let i = 0; i < result.length; i++) {
//     //     console.log();
//     // }
// }
// stringMap(myArr);

const arr = ["b","a","n","a","n","a"];

const count = {};

for (const element of arr) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count);

// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];


var myArray = [5,-8,2,6,9,'b',3,2,"hello",33,'t'];
var noDupeArray = [];
var result = [];

function sortArr(input) {
    noDupeArray = [...new Set(input)];
    for (var i = 0; i < noDupeArray.length; i++) {
        if ((/[0-9]/.test(noDupeArray[i]))) {
            result.push(noDupeArray[i])
        }
    } return result.sort();
}
console.log(sortArr(myArray))

// example input: [1,2,3,4,5];
// expected output: 15
// some possible test cases to think about:
//     function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers

var passedNumbers = [1,'2',3,4,5];
var result = 0;
function sumArr(input) {
    input = passedNumbers.map(Number);
    if (input === "") return "sum not available";
    for (var i = 0; i < passedNumbers.length; i++) {
        result += input[i];

    } return result;
}
sumArr(passedNumbers);

// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

var allNumbers = [12,2,3,4,5,6,7,8,9];
var evenNumbers = [];
for ( var i = 0; i <= allNumbers.length; i++) {
    if ( allNumbers[i] % 2 == 0) {
        evenNumbers.push(allNumbers[i]);
        console.log(evenNumbers);
    }}

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

var arrInput = [1,2,3,4,5,6,7,8,9,10];
var numInput = 3;
var newArr = [];

function sortArr(arr, num){
    for(i = 3; i < arr.length; i+=num) {
        newArr.push(i);
    } return newArr;
}
sortArr(arrInput,numInput);

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
var date1 = new Date("06/01/2020");
var date2 = new Date("06/11/2020");

// To calculate the time difference of two dates
function daysDifference(date1, date2) {
    var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
    return console.log("Total number of days between dates  " + date1 + " and " + date2 + " is: "
        + Difference_In_Days);
}
daysDifference(date1,date2);
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25

var arrInput = [1, 2, 3, 4, 5, 6, 7];
var numInput = -3;



function myArr(arr, num) {
    console.log(arr.reduce((a, b) => a + b, num))
}
myArr(arrInput,numInput);

// example Input: [1,-2,2,-4]
// expected output: 2

var numInput = [1,-2,2,-4,-5,9,-11];
var result = 0;
function stripNegatives(input) {
    for(i = 0; i < numInput.length; i++){
        if(input[i] < 0) {
            result += 1;
        }
    } return result;
}
stripNegatives(numInput);

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

var arr = [1, 2, 3, 4, 5, 6];

var stripArr = (input) => {
    for(i = 0; i < 3; i++) {
        input.shift();
    } return input;
}
stripArr(arr);

// 2.  Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values

var objCereal = {
    kellogg: ["Frosted Flakes", "Corn Flakes", "Raisin Bran"],
    quaker: ["Cap'n Crunch", "Quisp Cereal"],
    generalMills: ["Cheerios", "Cinnamon Toast Crunch"]

};

objCereal.forEach((element) => {
    element.quaker = "test";
})
console.log(objCereal);

var band = new Object();
var band1 = {};

band.genre = "Metal";
band['test'] = "Punk"
console.log(band);

if(!!true){
    console.log('hi');
}

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]


var arrInput = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];

arrInput.forEach(input => {input.continent = 'Asia'});

console.log(arrInput);

// another solution

var arrInput = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];

var addItemToObj = (input) => {
    for (let i = 0; i < input.length; i++) {
        input[i].continent = 'Asia';
    } return input;
}
console.log(addItemToObj(arrInput));

// List the primitive data types in javascript

//string
//number
//boolean
//null
//undefined
//symbol

// Write a function that takes an object as argument
// Swap the Javascript object's key with its values and return the resulting object

// example input: {z:'a',y:'b',x:'c',w:'d'}
// expected output: {a:'z',b:'y',c:'x',d:'w'}
// -------------------------
//     example input:{2:'a',4:'b',6:'c',8:'d'}
// expected output: {a:'2',b:'4',c:'6',d:'8'}
// -------------------------

//Get an array of key-value pairs using the Object.entries() method.
// Use the map() method to swap the place of each key and value.
// Use the Object.fromEntries() method to transform the key-value pair arrays to an object.

function swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(swapped);
}
console.log(swapKeysAndValues({z:'a',y:'b',x:'c',w:'d'}));

// Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)
//
// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set

// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
// example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------

function byThree() {
    var result = [];
    for(var i = 1; i <= 15; i++) {
        if(i % 3 === 0) {
            //console.log(i);
            result.push(i);
        } //else return false;
    } return result;
}
byThree();

var arr = [3, 4, 5, 6]
var mySet = new Set([1, 2, 3]);
//console.log(result);
function myArr(arr1, arr2) {
    // var result = arr1.concat(arr2);
    //  console.log(result);
    result = new Set([...arr2, ...arr1]);

    return result;
}
console.log(myArr(arr, mySet));

var i = 20;
while (i >= 0) {
    console.log(i);
    i--;
}

for (var i = 20; i >= 0; i--) {
    console.log(i);
}


// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

var object1 = {j:9,i:2,x:3,z:4};
var result = [];

function objEntry(input) {
    for (var [key] of Object.entries(object1)) {
        result += key;
    } return result.split("");
}
objEntry(object1);

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// example input: [{a:1,b:2},{a:5,b:4}]
// expected output: [{a:1,b:2},{a:5,b:4}]
// example input: [{a:2,b:10},{a:5,b:4}]
// expected output: [{a:5,b:4},{a:2,b:10}]
// example input: [{a:1,b:7},{a:2,b:1}]
// expected output: [{a:2,b:1},{a:1,b:7}]

var arrO = [{a:2,b:10},{a:5,b:4}];

arrO.sort((x, y) => {
    if(x.a < y.a) {
        return -1;
    }
});

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]

function myArr(arr1, arr2) {
    var result = arr1.concat(arr2);

    result = [...new Set(result)];

    return result.sort();
}
console.log(myArr([1,2,3],[3,4,5]));

var i = 20;
while (i >= 0) {
    console.log(i);
    i--;
}

for (var i = 20; i >= 0; i--) {
    console.log(i);
}


// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

var object1 = {j:9,i:2,x:3,z:4};
var result = [];

function objEntry(input) {
    for (var [key] of Object.entries(object1)) {
        result += key;
    } return result.split("");
}
objEntry(object1);





