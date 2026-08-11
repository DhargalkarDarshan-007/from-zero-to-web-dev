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


// ------------------------------------------
// 4. const - Constant Variable
// ------------------------------------------

const a1 = 6;

// a1 = a1 + 1;
// ❌ Not allowed because 'a1' is a constant


// ------------------------------------------
// 5. JavaScript Data Types
// ------------------------------------------

let x = "Harry bhai";  // String
let y = 22;            // Number
let z = 3.55;          // Number
const p = true;        // Boolean
let q = undefined;     // Undefined
let r = null;          // Null


// Display values
console.log(x, y, z, p, q, r);


// Display data types
console.log(
    typeof x,
    typeof y,
    typeof z,
    typeof p,
    typeof q,
    typeof r
);

// ------------------------------------------
// 6. JavaScript Objects
// ------------------------------------------

let o = {
    name: "Harry",
    "job code": 5600,
    is_handsome: true
};

// Display object
console.log(o);


// ------------------------------------------
// 7. Adding a new property to an object
// ------------------------------------------

o.salary = "100 crores";

console.log(o);


// ------------------------------------------
// 8. Updating an existing property
// ------------------------------------------

o.salary = "500 crores";

console.log(o);


