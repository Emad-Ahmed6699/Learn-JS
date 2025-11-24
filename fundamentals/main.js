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
if (Number(num) % 2 === 0) {
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is an odd number.`);
}

console.log(typeof num); // Output: string
//the prompt() method always returns a string, so we need to convert it to a number using Number() function before performing arithmetic operations

console.log(typeof String(123)); // Output: string
let fffs = 12345;
console.log(typeof fffs.toString()); // Output: string
console.log(typeof (100).toString()); // Output: string using () or ..
console.log(typeof 123..toString()); // Output: string

// strings in js
let sampleString = "  Hello, JavaScript!  ";
console.log(sampleString.length); // Output: 21
console.log(sampleString.trim()); // Output: "Hello, JavaScript!"
console.log(sampleString.toUpperCase()); // Output: "  HELLO, JAVASCRIPT!  "
console.log(sampleString.toLowerCase()); // Output: "  hello, javascript!  "
console.log(sampleString.indexOf("JavaScript")); // Output: 8
console.log(sampleString.slice(2, 7)); // Output: "Hello"
console.log(sampleString.replace("JavaScript", "JS")); // Output: "  Hello, JS!  "
console.log(sampleString.split(", ")); // Output: [ "  Hello", "JavaScript!  " ]
console.log(sampleString.charAt(4)); // Output: "o"
console.log(sampleString.includes("Java")); // Output: true
console.log(sampleString.startsWith("  He")); // Output: true
console.log(sampleString.endsWith("!  ")); // Output: true
console.log(sampleString.repeat(3)); // Output: "  Hello, JavaScript!    Hello, JavaScript!    Hello, JavaScript!  "
//string methods are used to manipulate and retrieve information from strings


//arrays in js
let sampleArray = [10, 20, 30, 40, 50];
console.log(sampleArray.length); // Output: 5
console.log(sampleArray.push(60)); // Output: 6 (new length after adding element)
console.log(sampleArray); // Output: [10, 20, 30, 40, 50, 60]
console.log(sampleArray.pop()); // Output: 60 (removed element)
console.log(sampleArray); // Output: [10, 20, 30, 40, 50]
console.log(sampleArray.shift()); // Output: 10 (removed first element)
console.log(sampleArray); // Output: [20, 30, 40, 50]
console.log(sampleArray.unshift(5)); // Output: 5 (new length after adding element at start)
console.log(sampleArray); // Output: [5, 20, 30, 40, 50]

console.log(sampleArray.indexOf(30)); // Output: 2
console.log(sampleArray.slice(1, 4)); // Output: [20, 30, 40] (sliced array from index 1 to 3)
console.log(sampleArray.join(", ")); // Output: "5, 20, 30, 40, 50"

let shortArray = [1, 2, 3,4,5,6,7,8,9];
console.log(shortArray.splice(2, 2,11)); // Output: [3, 4] (removed elements) /* splice(index, deleteCount, item we need to add) */
console.log(shortArray); // Output: [1, 2, 11, 5, 6, 7, 8, 9]

console.log(shortArray.reverse()); // Output: [9, 8, 7, 6, 5, 11, 2, 1]
let longArray = [7, 2, 1, 6, 44, 8, 9, ]; // Sorting in ascending order
console.log(longArray.sort()); // Output: [1, 2, 6, 7, 8, 9, 44]


let numbersArray = [1, 2, 3, 4, 5];
let number2Array = [10, 20, 30, 40, 50];
let combinedArray = numbersArray.concat(number2Array);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50] <----
numbersArray += number2Array; //this will convert both arrays to strings and concatenate them
console.log(numbersArray); // Output: "1,2,3,4,510,20,30,40,50" <---

//array methods are used to manipulate and retrieve information from arrays