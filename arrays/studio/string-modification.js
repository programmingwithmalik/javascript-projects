const input = require('readline-sync');
let str = "LaunchCode";
let info = input.question("Choose a number of letters to re-arrange");

//1) Use string methods to remove the first three characters from the string and add them to the end.
let newStr = str.substring(0,3);
str=str.substring(3);
str=str.concat(newStr);
console.log(str);
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (info >str.length) {

    console.log("Try again!");
}