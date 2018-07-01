/* ============================================ 
; Title: Assignment 4.4
; Author: Timothy Wilson
; Date: 12 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of predicates.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-4.3"));

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// function
function getValue(x, val) {
    for (var k = 0; k < x.length; k++){
        if (x[k] === val)
        console.log(x[k]);
    }

}


// Output
console.log("-- ORIGINAL ARRAY --");
for (var x = 0; x < states.length; x++){
    console.log(states[x]);
    
}

console.log(' ')

console.log("-- Sorted Array --")
states.sort();
for (var x = 0; x < states.length; x++){
    console.log(states[x]);
}

console.log(' ')

console.log("-- Selected Value --");
getValue(states, 'Iowa');



// end program
