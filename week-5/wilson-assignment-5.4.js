/* ============================================ 
; Title: Assignment 5.4
; Author: Timothy Wilson
; Date: 23 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Filtering/Reducing Complex Data Structures.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-5.2"));

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

var famousComposers = [
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


console.log("-- COMPOSER BY RATING --");
var comnposersByRating = famousComposers.map(function(composer) {
    console.log("Rating " + composer.Rating + " \n" + "Composer: " + composer.lastName + " \n")

});

console.log("-- COMPOSER BY GENRE --");
var composersByGenre = famousComposers.map(function(composer) {
    console.log("Genre: " + composer.Genre + "\n" + "Composer: " + composer.lastName + "\n")
});


// end program