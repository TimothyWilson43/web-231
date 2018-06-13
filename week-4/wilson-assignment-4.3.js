/* ============================================ 
; Title: Assignment 4.3
; Author: Timothy Wilson
; Date: 12 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of filters.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-4.3"));


/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr, val) {
    for (var k = 0; k < arr.length; k++){
        if (arr[k] === val)
        console.log(arr[k]);
    }

}

// Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++){
    console.log(vehicles[x]);
}

//New Line
console.log(" ");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

console.log(" ");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");


// end program