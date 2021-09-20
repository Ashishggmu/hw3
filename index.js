8// Log a value to the console:
var w=8;
console.log(w);


// Return an array of all arguments passed to a Node script:
process.argv.slice(2);

// Declare a variable without initializing it with a value:
var a: Int;
var b: String;

// Declare a variable that can't be reassigned:
const hi='hello';

// Given these two variables,
let firstName = "Samuel"
let age = 30

  // Write the string "Samuel is 30 years old." using concatenation:
  let firstName = "Samuel"
let age = 30
var c = firstName.concat(" "+"is"+" "+age+ " "+"years old" );
console.log(c);
  
  // Write the string "Samuel is 30 years old." using interpolation:
let firstName = "Samuel"
let age = 30
let w = `${firstName} is ${age} years old`; 
console.log( w );

// Using a compound assignment operator, reassign the variable "age" to be 
// two times its current value:

let age = 30
age= age*2;
console.log(age);


// Check if the variable "age" is equal to the string "60". What gets returned and why?
let firstName = "Samuel"
let age = 30
age= age*2;
var string = "60";
if(age=string){
    console.log("true");
}
else{
    console.log("false")
}


it prints true because normal equal to is comparing variables which ignores the datatypes. so,because it has same value but different datatypes it prints true.


// Check if the variable "age" is srictly equal to the string "60". What gets returned and why?
let firstName = "Samuel"
let age = 30
age= age*2;
var string = "60";
if(age===string){
    console.log("true");
}
else{
    console.log("false")
}

it prints false because srictly equal to is comparing variables with datatypes. so,because it has same value but different datatypes it prints false.

// Return the remainder of the variable "age" after dividing it by 12:
let firstName = "Samuel"
let age = 30
age= age*2;
console.log(age%12);


// Generate a random integer between 10 and 20:
var randomnumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomnumber)

// Convert this string to "SCREAMING_SNAKE_CASE" using a method:
"screaming_snake_case"
var c="SCREAMING_SNAKE_CASE";
var d=c.toLowerCase();
console.log(d)

var c="SCREAMING_SNAKE_CASE";
var d=c.toUpperCase();
console.log(d)

// Return the word "love" from this string using a method:
"I love string manipulation"
var word = "I love string manipulation"

console.log(word.split(" ")[1])

// Access the letter 'g' from the letters array:
const letters = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
]
const letters = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ]
  var z= letters[2][0];
console.log(z)  

// Get the length of the "letters" array:
const letters = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ]
  var z= letters.length
console.log(z)  

// Append a nested array containing the letters "j", "k", and "l" to the end of the "letters" array:
const letters = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ]
  letters.push(["j","k","l"])
console.log(letters)  
