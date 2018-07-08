/* ============================================ 
; Title: Assignment 7.2
; Author: Timothy Wilson
; Date: 7 July 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Constructor Functions.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-7.2"));
/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Inventor(id, firstName, lastName, title) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.displayOneGuy = function(){
            return this.id + ' ' + this.firstName + ' ' + this.lastName + ' ' + this.title;
        }
    };

var allInventors = [
    new Inventor("1", "Thomas", "Edison", "Software Engineer"),
    new Inventor("2", "Benjamin", "Franklin", "Programmer"),
    new Inventor("3", "Nikola", "Tesla", "Project Manager"),
    new Inventor("4", "Charles", "Babbage", "Product Manager"),
    new Inventor("5", "Alexander", "Bell", "Business Analyst")
   
];

function displayInventors(inventors){
    for(var i = 0; i < inventors.length; i++){
            console.log(inventors[i].displayOneGuy());
    }
};

displayInventors(allInventors);


// end program