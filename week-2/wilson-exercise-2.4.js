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
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function properties go here...

fullName.timothyWilson = "Timothy Wilson";
dateWriter.date = "30 May 2018";
formatNumber.temp = "78";
convertToInt.age = "32";
convertToFloat.savings = "$10,000";

// function(s) go here...
function fullName() {
    return fullName.timothyWilson;
}

function dateWriter() {
    return dateWriter.date;
}

function formatNumber() {
    return formatNumber.temp;
}

function convertToInt() {
    return convertToInt.age;
}

function convertToFloat() {
    return convertToFloat.savings;
}

// output 
console.log(header.display("Timothy", "Wilson", "wilson-exercise-2.4"));
console.log('\n'); 
console.log("Hello my name is " + fullName.timothyWilson + "\nToday's date is "
 + dateWriter.date + " and the current temperature is " + formatNumber.temp + " degrees"
+ ", I am " + convertToInt.age + " years old, and my savings account goal is " + 
convertToFloat.savings + " dollars.");




// end program 