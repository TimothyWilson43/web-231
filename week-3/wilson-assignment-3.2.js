/* ============================================ 
; Title: Assignment 3.2
; Author: Timothy Wilson
; Date: 7 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of pattern matching functions.
;=========================================== */

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 


// variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Three";
var testVar6 = "Four";

// functions 
function match(arg1, arg2) {
    if(arg1 === arg2)
        return true
    else 
        return false
} 

function logMismatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
}

// six (6) test variables 



// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(testVar1, testVar2)) {
    logMatch(testVar1, tesVar2);
} else {
    logMismatch(testVar1, testVar2);
}

// "If...else" statement testing variables 3 and 4
if (match(testVar3, testVar4)){
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

// "If...else" statement testing variables 5 and 6
if (match(testVar5, testVar6)){
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}

// end program 