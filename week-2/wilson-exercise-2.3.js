/* ============================================ 
; Title: Assignment 2.3
; Author: Timothy Wilson
; Date: 30 May 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of a function property.
;=========================================== */

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.timothy = "Timothy Wilson!";

// function 
function myName() {
    return myName.timothy;
}

// output 
console.log(header.display("Timothy", "Wilson", "wilson-exercise-2.3"));
console.log('\n'); 
console.log("Hello " + myName());




// end program 