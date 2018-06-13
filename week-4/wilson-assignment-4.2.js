/* ============================================ 
; Title: Assignment 4.2
; Author: Timothy Wilson
; Date: 12 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of loops.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-4.2"));

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];   

// function
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++){
    console.log(arr[k]);
    }  
}


// Output from the getFruit() function
getFruit(fruit);




// end program