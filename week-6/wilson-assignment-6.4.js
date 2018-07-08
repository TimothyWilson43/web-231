/* ============================================ 
; Title: Assignment 6.4
; Author: Timothy Wilson
; Date: 1 July 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Exeptional Handling.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-6.4"));

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

console.log(header.display("Timothy", "Wilson", "wilson-assignment-6.4"));

var ticket = {
        id: "12345",
        name: "Ticket Fred",
        dateCreated: "1 May 2018",
        priority: "Low",
        personId: "fullName",

    person: {
        id: "Employee",
        firstName: "Johnny",
        lastName: "GoGetter",
        jobTitle: "Project Gopher"
    }
};


console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + 
            ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")")

// end program