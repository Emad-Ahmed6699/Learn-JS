var x = prompt("Enter a number:", "0");//default value is 0
document.write("You entered: " + x);

console.log(5 == 5);// true
console.log(5 == '5');// true
console.log(5 === '5');// false
//== is loose equality operator , it compares values 
//=== is strict equality operator ,it compares values and types

// if condition
// if-else condition
// if-else if-else condition
// switch case
// ternary operator


//looping statements
// for loop
// while loop
// do-while loop
// for-in loop
// for-of loop

// functions
function add(a, b) {
    console.log(a + b);
}
add(5, 10);

function multiply(a, b) {
    return a * b;
}
var result = multiply(5, 10);
console.log("Multiplication: " + result);

//hoisting example  
console.log("Hoisting example: " + hoistedVar); // undefined
var hoistedVar = 10;
console.log("After declaration: " + hoistedVar); // 10
// In hoisting, variable declarations are moved to the top of their scope before code execution.
//  However, only the declarations are hoisted, not the initializations.
// So, accessing a variable before its declaration results in 'undefined' rather than an error.

console.log("Hoisting example with let: " + hoistedLet); // ReferenceError
let hoistedLet;
hoistedLet = 20;
console.log("After declaration with let: " + hoistedLet); // 20
// Variables declared with let and const are not hoisted in the same way as var.
// Accessing them before their declaration results in a ReferenceError due to the temporal dead zone.
//so var and let have different hoisting behavior and redeclaration rules(((2 different behaviors))).

//hoisting with functions
console.log("Hoisting with function: " + hoistedFunction(5, 10)); // 15
function hoistedFunction(a, b) {
    return a + b;
}
// Function declarations are hoisted entirely,
//  allowing them to be called before their definition in the code.

// to make the function expression hoisted we can use named function expression
console.log("Hoisting with function expression: " + hoistedFunctionExpr(5, 10)); // TypeError
var hoistedFunctionExpr = function(a, b) {
    return a + b;
};
//let or var the same for function expression
// Function expressions are not hoisted.
// Attempting to call them before their definition results in a TypeError.

//global and local scope

//in the function we can access global variables but in the global scope we cannot access local variables
//but in for loop and while loop and if condition we can access the variables outside the block 
// because JS does not have block scope for var keyword but it has block scope for let and const keywords
for (var i = 0; i < 5; i++) {
    console.log("Inside for loop: " + i);
}
console.log("Outside for loop: " + i); // i is accessible here because var is function-scoped, not block-scoped
//if we use let instead of var then it will give error
for (let j = 0; j < 5; j++) {
    console.log("Inside for loop with let: " + j);
}
console.log("Outside for loop with let: " + j); // ReferenceError: j is not defined

//for more info var is by default is hoisted so that we can access it outside the block


//slef-invoking functions
(function() {
    console.log("This is a self-invoking function");
}   )();
//function is invoked immediately after its definition without being called explicitly. (())  -without name

//simple quiz
console.log(             x()      ); // What is the output?
function x() {
    function y () {return 1;}
    return y();
    function y () {return 0;}
}
//output is 0
//because of hoisting both y functions are hoisted but the second y function overwrites the first one
//so when y() is called it refers to the second y function which returns 0

//default parameters
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!

function sum(        ...nums         ) { // rest parameter(passes multiple arguments as an array)
    console.log(nums);// array of numbers
}
sum(1, 2, 3, 4); // [1, 2, 3, 4]

//arrow functions
const square = (n) => n * n; //remove return and curly braces for single expression and function keyword
console.log("Square of 5: " + square(5)); // 25
//if more than one statement is there then we need to use curly braces and return keyword

//one parameter
const cube = n => n*n*n; //no need of parentheses for single parameter
//no parameter
const greetUser = _ => console.log("Hello User!");//underscore is used when there is no parameter



//----------------------------------------------------------------------------------------\\

//objects
let person = {};
console.log(typeof person);// output : object

//properties and methods

let car = {
    brand: "Toyota",
    model: "Camry",
    colors : ["Red", "Blue", "Green"],
    
    numbers :{                // nested object
        vin: "1234567890",
        plate: "XYZ 1234"
    },

    start: function() {
        console.log("Car started");
    }

    ,functionWithArrow: () => {
        console.log(car.colors[3]);//accessing property inside arrow function must use object name
    }

};
console.log("Car brand: " + car.brand); // Accessing property
car.start(); // Calling method

//accessing nested object property
console.log("Car VIN: " + car.numbers.vin);
//or using []
console.log("Car VIN: " + car["numbers"]["vin"]);

//adding new property without declaration inside object
let bike = {};
bike.brand = "Yamaha";
bike.model = "R15";
console.log("Bike brand: " + bike.brand);
//adding new method without declaration inside object
bike.start = function() {
    console.log("Bike started");
};

//using new keyword
let student = new Object();
student.name = "John";
student.age = 20;
//or 
let employee = new Object({
    name: "Jane",
    age: 25
});
//important note: new keyword creates an instance of Object but object literal {} is preferred way to create objects

//deleting property
delete car.model;
console.log("Car model after deletion: " + car.model); // undefined

