//  Pseudocode for Secure the vault
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
/*  Here I am defining variables
 */
let num = 10;
let numOne = num + 0;
let numTwo = num * 4;
let numThree = numTwo - 1;
/*
Add variables to a string with message.
*/
const str = `${message} ${numOne}, ${numTwo}, ${numThree}`;
console.log(str);
/* Display str in an alert. */
alert(str);
