// functions

// function greeting(){
//     console.log("Becoming developer soon!");
// }
// greeting();

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
//     return "hii today is amazing day , i got purpose"
// }
// console.log(addNumber(21,25));
// const final=addNumber(21,25,26);
// console.log(final);
// addNumber(6,7);


// now when we have n number of inputs so we use rest operator

// function sum(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;  
//     }
    // console.log(sum);
//     return sum;
// }
// sum(12,5,0,2,78,9,25);
// const total=sum(12,5,0,2,78,9,25);
// console.log(total);


// difference between spread and rest operator

// const arr=[20,30,40,50,80];
// const [first,second,...num]=arr;
// console.log(arr);
// here the rest operator is used.

// const arr2=[10,50,"Vipin","Sanskar"];
// const arr3=[...arr,...arr2];
// console.log(arr3);
// here the spread operator is used.


// another way  to create functions.

// function: expression
// console.log(addNumber(20,35));

// const addNumber = function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(20,35));
// it gives error which is Reference error , tells cannot access addNumber before initialization

// console.log(addNumber(30,25));

// function addNumber(num1,num2){
//     return num1+num2;
// }
// defining the function in this way , it gives output due to hoisting concept.
// console.log(addNumber(30,25));

// arrow function 

// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNumber(5,8));

// const addNumber=(num1,num2)=> num1+num2;
// console.log(addNumber(5,8));

// square of a number with the arrow function

// const squarenumber= n =>n*n;
// console.log(squarenumber(5));

// if we have single parameter, no need of this ().

// const greeting = ()=>{
//     let user={
//         name:"Vipin Verma",
//         age:22,
//     }
//     return user;
  
// }
// console.log(greeting());

// const greeting = ()=>({name:"Vipin", college:"bbd"});
// console.log(greeting());


// IIFE (Immediately Invoked function )

// (()=>{
//     console.log("Hello , it's good time to work on your skills");
// })();



//Callback function: a function which is passed as an argument to another function.
// function dinner(){
//     console.log("It's a time to having dinner");
// }
// function greet(callback){
//     console.log("Hello , good evening");
//     callback();
// }

// greet(dinner); 


// as a normal useCallback(
// blinkit 
function blinkitOrderPlaced(){
    console.log("we have started pcking your food")
}
function zomatoOrderPlaced(){
    console.log("we have started the preparing your food");
}
function payment(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is received");
    callback();
}

payment(500,blinkitOrderPlaced);



// Hoisting concept-

// console.log("Tuition timing can be done");
// function Tuition(){
//     console.log("it's good to be haapy");
// }
// Tuition();


time();
var time=function Tuition(){
    console.log("it's good to be haapy");
}
