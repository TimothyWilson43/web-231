/* ============================================ 
; Title: Assignment 3.3
; Author: Timothy Wilson
; Date: 8 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of control statements.
;=========================================== */

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

//switch statement below

switch(eventKeyCode){
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The sbacebar key was pressed");
        break;
    case 8:
        console.log("The backspace key was pressed");
        break;
    default:
        console.log("Unrecognized key pressed")
        break;
}

// end program 