/* ============================================ 
; Title: Assignment 6.2
; Author: Timothy Wilson
; Date: 28 June 2018
; Modified By: Timothy Wilson
; Description: This program demonstrates the 
; use of Exeptional Handling.
;=========================================== */

var header = require('../header.js');
console.log(header.display("Timothy", "Wilson", "wilson-assignment-6.2"));

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
try {

    var x = 0;

    var y = 1;

    var sum = y / x;

if (sum == Infinity) throw "<Your message>";

    console.log(sum);

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause reached: End of program â€¦");

}
// end program