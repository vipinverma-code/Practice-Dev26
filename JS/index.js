console.log("hello , I am just doing my work with proper focus , don't listen the outside noise");

// now variables in javascript
// variable declaration
var age=20;
// variable redeclaration
var age=40;   
    // variable reassign the value  
age=45;
console.log(age);

if(true){
    var age=40;
}
console.log(age);
// it supports the function scope , global scope but it don't support the block scope
// this is the old method 


// now , let keyword

let name="Vipin Verma";
// let name="Ayush Verma";
// redeclaration not possible , but reassign is possible
name="Ayush Verma";
console.log(name);

// let keyword supports all the scope , function scope , block scope , global scope


// now const keyword

const n=24;
// n=45;
// here redeclaration , reassign of values not possible
console.log(n);
// it supports all the scope i.e. function scope, block scope, global scope


// let sum;
// sum=20;
// console.log(sum);