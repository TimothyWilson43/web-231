/* ============================================ 
; Title: Assignment 5.2
; Author: Timothy Wilson
; Date: 23 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of built in functions.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-5.2"));

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

foods.forEach(function(food){
    console.log(food);
});







// end program