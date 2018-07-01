/* ============================================ 
; Title: Assignment 6.3
; Author: Timothy Wilson
; Date: 1 July 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Exeptional Handling.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-6.3"));

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

var ticket = {

    id: "12345",

    ticketName: "Ticket Fred",

    firstName: "John",

    lastName: "Doe"

};


console.log("{id: " + ticket.id + ", name: " + ticket.ticketName + ", requester: " + 
ticket["firstName"] + " " + ticket["lastName"] + "}");



// end program