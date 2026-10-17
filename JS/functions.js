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

function addNumber(num1,num2){
    return num1+num2;
}
// defining the function in this way , it gives output due to hoisting concept.
// console.log(addNumber(30,25));

