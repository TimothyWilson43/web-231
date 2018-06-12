/* ============================================ 
; Title: Assignment 3.4
; Author: Timothy Wilson
; Date: 8 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of loops.
;=========================================== */

var header = require('../header.js'); 
console.log(header.display("Timothy", "Wilson", "wilson-exercise-3.4"));

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable
var testVar1 = 1;

// for loop
console.log("-- Displaying for loop --");

for(var count = 0; count < 10; count++) {
    
    var rnd = randomNumber();
 
    if (match(count, rnd)) 
    {
        logMatch(count, rnd);
    }
    else
    {
        logMismatch(count, rnd);
    }
}

// while loop
console.log("\n-- Displaying while loop --"); 
var index = 3;

while(index < 10){

if (match(index, rnd)) {
    logMatch(index, rnd);
    }
    else {
       logMismatch(index, rnd);
    }
index++;
}



// Reused functions from exercise-3.2.js
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

// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}