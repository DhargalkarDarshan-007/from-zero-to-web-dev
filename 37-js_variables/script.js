// ==========================================
// JavaScript Tutorial 55 - Variables & Data Types
// ==========================================

console.log("Hey, this is Tutorial 55");

// ------------------------------------------
// 1. Variables using var, let and const
// ------------------------------------------

var a = 5;
// a = a + 1;  // We can change the value of a

let b = 6;
let c = "Harry";
let _a = "Shubham";

// Variable names cannot start with a number
// var 55a = "Rohan"; // ❌ Not allowed


// ------------------------------------------
// 2. Checking variable values and types
// ------------------------------------------

// console.log(a + b + 8);
// console.log(typeof a, typeof b, typeof c);


// ------------------------------------------
// 3. Block Scope
// ------------------------------------------

{
    let a=66;
    console.log(a);
}

console.log(a);
