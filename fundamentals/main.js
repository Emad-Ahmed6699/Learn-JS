document.querySelector('h1').style.color = 'red';

onload = function() {
    console.log('Page is fully loaded');
    document.body.style.backgroundColor = 'lightblue';
    // this onload function ensures that after the page is fully loaded, the background color of the body changes to light blue
    //the onload event is useful for executing code that depends on the complete loading of the page content
}


document.writeln('This will cause an error because document.log is not a function');//in the document
console.log('This will work because console.log is a valid function');//in the console

window.alert('This is an alert box!');//shows an alert dialog box with the specified message
//<<<window is the global object in browsers,And it have the document object as a property and  console as well>>>>
window.confirm('Do you want to proceed?');//shows a confirmation dialog box with OK and Cancel buttons

document.write('<h2>This text is written using document.write()</h2>');//writes the specified HTML content directly to the document
//Note: Using document.write() after the page has loaded will overwrite the entire document content

console.error('This is an error message');//logs an error message to the console
console.warn('This is a warning message');//logs a warning message to the console

window.print();//opens the print dialog to print the current document

window.document.title = 'New Title';//window object's is used to access and modify the document 

//the browser know i am using it so we can omit the window object and just use document.title = 'New Title';
//or print() instead of window.print() or alert() instead of window.alert() etc.


//data types in js
//primitive data types: string, number, boolean, null, undefined, symbol, bigint
//non-primitive data types: object (arrays, functions, objects)
//dynamic typing: variables can hold values of any data type and can change types at runtime
let exampleString = "Hello, World!"; // string
let exampleNumber = 42; // number
document.writeln(typeof exampleString); // Output: string
document.writeln(typeof true); // Output: boolean
document.writeln(typeof undefined); // Output: undefined
document.writeln(typeof null); // Output: object (this is a known quirk in JavaScript)

// variables in js
//var, let, const
var globalVar = "I am a global variable"; // function-scoped or globally-scoped and can be redeclared and reassigned
// var globalVar = "I can be redeclared"; // redeclaration is allowed with var

let blockVar = "I am a block-scoped variable"; // block-scoped and can be reassigned but not redeclared
// let blockVar = "I cannot be redeclared"; // redeclaration is not allowed with let
blockVar = "I can be reassigned"; // reassignment is allowed with let ((error will occur if we try to redeclare it))
//coz that we use always let instead of var

const constantVar = "I am a constant variable"; // block-scoped and cannot be reassigned or redeclared

//concatination
let firstName = "John";
let lastName =25 ;
console.log("My name is " + firstName + " and I am " + lastName + " years old."); // Using + operator
console.log(`My name is ${firstName} and I am ${lastName} years old.`); // Using template literals`` under ESC key

console.log('5 + 10'); // Output: 15 (number)
console.log('5' + 10); // Output: 510 (string concatenation)
console.log('4' + '10'); // Output: 410 (string concatenation)
console.log('5' - 2); // Output: 3 (number) JS automatically converts string to number for subtraction
console.log('10' * 2); // Output: 20 (number)
console.log('10' / 2); // Output: 5 (number)
console.log('10' ** '2'); // Output: 100 (number)

console.log(typeof NaN); // Output: number (Not-a-Number is of type number)
console.log(NaN === NaN); // Output: false (NaN is not equal to anything, including itself)
console.log(NaN == NaN); // === vs == both are false for NaN
console.log(+null); // Output: 0 (unary plus converts null to 0)
console.log(+undefined); // Output: NaN (unary plus converts undefined to NaN)
console.log('abc' - 2); // Output: NaN (invalid arithmetic operation results in NaN)

console.log(+'5' + +'4'); // Output: 9 (unary plus converts string to number)
console.log(Number('5') + Number('4')); // Output: 9 (using Number() function to convert string to number)

console.log(typeof NaN); // Output: number (Not-a-Number is of type number)

console.log(parseInt('10abc')); // Output: 10 (parses integer from the beginning of the string)
console.log(parseInt('10.5abc')); // Output: 10 (parses integer, ignores decimal part)
console.log(parseInt('ab 10.5 abc')); // Output: NaN (no valid integer at the start)
//parseint better than number() coz it can extract numbers from strings 

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 (largest representable number)
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991 (largest safe integer)
console.log(Number.isSafeInteger(9007199254740991)); // Output: true
console.log(Number.isSafeInteger(9007199254740992)); // Output: false (exceeds safe integer limit)

console.log(Number.isInteger(10)); // Output: true
console.log(Number.isInteger(10.5)); // Output: false

console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN('abc')); // Output: false (string is not NaN)

//math class in js
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.round(4.7)); // Output: 5
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.random()); // Output: random number between 0 and 1
console.log(Math.max(10, 20, 5, 15)); // Output: 20
console.log(Math.random() * 100); // Output: random number between 0 and 100

//simple application 
let num = window.prompt("Enter a number to check if it's even or odd:");
console.log(`You entered: ${num}`);
