/* ============================================ 
; Title: Assignment 5.3
; Author: Timothy Wilson
; Date: 23 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of object collections.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-5.2"));

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

var composers = [
    {
        lastName: "Beethoven",
        Genre: "Classical",
        Rating: "8"
    },
    {
        lastName: "Mozart",
        Genre: "Classical",
        Rating: "10"
    },
    {
        lastName: "Bach",
        Genre: "Classical",
        Rating: "9"
    },
    {
        lastName: "Haydn",
        Genre: "Classical",
        Rating: "6"
    },
    {
        lastName: "Shubert",
        Genre: "Classical",
        Rating: "5"
    },
];

console.log("-- COMPOSERS --");

composers.forEach(function(composer) {
    console.log(
       "Last Name: " + composer.lastName + ", Genre: " + composer.Genre + 
       ", Rating: " + composer.Rating
    )
});


// end program