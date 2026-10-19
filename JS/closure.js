// Closure , Scope , High Order function ka use with code and use case

// let a=10;
// const b=20;

// if(true){
//     console.log(b);
//     console.log(a);
// }
// function greet(){
//     console.log(a);
// }
// greet();
// here variables a and b have global scope 

// simple agar scope check krna hai let say maine kuch varaible bahar bnaye uske baad unki values function aur block ke andar print kra rhe hai , agar possible  so they have a global scope.


// function wish(){
//     let c="morning";
//     console.log("Hello , good evening");
// }
// console.log(c);
// here c have function scope

// if(true){
//     let d="good to see";
//     console.log(d);
// }
// console.log(d);
// here d heve block scope only.

// var don't respect the block scope 

// if(true){
//     var a="hii eveyone";
//     console.log(a);
// }
// console.log(a);

// let global = 30;

// function greet(){
//     // let global = 70;
//     console.log(global);
// }
// greet();
// let global=30;
// function greet(){
//     let global = 40;
//     function meet(){
//         console.log(global);
//     }
//     meet();
// }
// greet();


// function createCounter(){
//     function increment(){
//         console.log("I am increment function");
//     }
//     return increment;
// }
// const count = createCounter();
// count();

// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// // const total=sum(5,8);
// // console.log(total);
// sum(10);


// function createCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// // console.log(count);
// const counter= createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let say  you are building the web application.

// Closures are used to make variables private.

// function IncrementCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         return count;
//     };
//     return increment;
// }

// const counter=IncrementCounter();
// console.log(counter());
// here closure concept is used.


// Higher Order function 
// function greet(){
//     console.log("namaste");
// }

// function hello(callback){
//     console.log("hello say");
//     callback();
// }
// hello(greet)

// function Counter(){
//     function increment(){
//         console.log("It is done");
//     }
//     return increment;
// }
// const count=Counter();
// count();

function double(value){
    return function execute(num){
        return num*value;
    }
}
const n = double(20);
console.log(n(5));
