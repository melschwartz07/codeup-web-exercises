"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
function isNegative(i) {
    if (i < 0){
        return true;
    } else {
        return false;
    }
}

// 2. Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
function isTen(i) {
    if (i === 10){
        return true;
    } else {
        return false;
    }
}

// 3. Write a function named double that accepts a number and returns the number doubled.
function double(i){
    return (i * 2);
}

// 4. Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.

function remove9s(numbers) {
    var numberArray = [];
    numbers.forEach(function (num) {
        if( num !== 9){
            numberArray.push(num)
        }
    });
    return numberArray
}

// 5. Write a function named average that accepts an array of numbers and returns the average of those numbers.
function average(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}


// 6. Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds(arr){
    var odd = arr.filter(element => element % 2 !==0);
    return odd.length;
}

// 7. Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property.
// The function should return the average of every object's sales property.

averageSales([
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
])

function averageSales(arr) {
    var totalSales = averageSales.sales;

    for(var i = 0; i < arr.length; i++){
        var avg = totalSales / arr.length;
    }
    return avg;
}

//
// function averageSales(arr){
//     var total = 0;
//     for (var i = 0; i < arr.length; i++){
//         total += arr.sales;
//     }
//     return total / arr.length;
// }

// 8. Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character,
// and returns an object with properties firstName and lastName.
function convertNameToObject(names) {
    names = names.split(' ');
    var namesSplit = {};
    for(var i = 0; i< names.length; i++)
        console.log(i);
    namesSplit.push({
        firstName: names[i],
        lastName: names[i],

    });
    return nameSplit;

}

// 9. Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
function countVowels(str1){
    var vowel = 'aeiou';
    var vowelCount = 0;
    for(var x = 0; x < str1.length ; x++){
        if (vowel.indexOf(str1[x]) !== -1)
        {
            vowelCount += 1;
        }
    }
    return vowelCount;
}
// 10. Write a function named analyzeWord. It should take in a string and return an object with information about the input word.
// The object returned should have the following properties:

// word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word

function analyzeWord(str) {
    var word = {};
    word.word = str;
    word.numberOfLetters = word.length(str);
    word.numberOfVowels = word.length(str);
    return word;
}


// 11. Write a function named capitalizeName that accepts a string that is a first and last name separated by a space,
// and returns a string that that has the first and last names capitalized.

// For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
function capitalizeName(str)
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}



