// Array;

// let marks= [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof(marks));

// marks[0]=10;

// push: adding a new element to the end of array

// marks.push(30);
// console.log(marks);

// pop : delete the element from the end

// marks.pop();
// console.log(marks);

// unshift : adding an element to the starting
// shift : remove the element from the starting

// marks.unshift(70);
// console.log(marks);
// marks.shift();
// console.log(marks);

// Now Iteration over the array

// let arr = [10,30,50,90,11];

// for(let i=0; i< arr.length;i++){
//     console.log(arr[i]);
// }

// now with the help od forof loop

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;
// arr2.push(30);
// console.log(arr);
// console.log(arr2);
// changes done in both arrays , because objects are copied by reference 


// Object(non primitive): Copy by reference hoti hai
//  Primitive: Copy by value

// const arr=[10,30,50,90,11];
// arr=[80,90,11]; not possible because const is not reassignable
// console.log(arr);

// slice method of array

// const arr = [10,30,50,90,11]
// console.log(arr.slice(2,4));
// slice method original array ko change nhi krta hai , vo new array create krta hai
// console.log(arr);

// console.log(arr.splice(1,3));
// splice method original array me change krta hai 
// console.log(arr);


// Merging of two arrays

// const arr= [10,30,50,90,11];
// const arr2=["Rohit", 11, true];

// console.log(arr + arr2); it gives string
// const arr4= arr.concat(arr2);
// console.log(arr4);


// modern method with the help of spread operator

// const arr3= [... arr, ...arr2];
// console.log(arr3);
// console.log(typeof arr3);


// string to array conversion with the help of split() method
// let str="Vipin Verma";
// const array= str.split(" ");
// console.log(array);

// Now array to string conversion with the help of join method , toString() method

// const arr4=[10,"Vipin","Sansu","ashu"];
// console.log(arr4.toString(""));
// // only difference is i can join it with the , _ , which i need, but in to string it can join with the , only
// console.log(arr4.join("_"));

const arr=[10,20,40];
console.log(arr.indexOf(10));
console.log(arr.includes(20));

// Now do sorting of array elements

const names=["Alice", "Rohit", "bob","Mohit", "Charlie"];
names.sort();
// names.reverse(); descending order
console.log(names);

const arr2=[10,60,80,125];
// arr2.sort(); in case of numbers it gives wrong output so use function (a,b)=> a-b; for ascending and (a,b)=> b-a for descending order
// arr2.sort((a,b)=> a-b); for ascending order
// arr2.sort((a,b)=> b-a);  descendng order
console.log(arr2);


// in the case of heterogeneous data in the array , it treated and compare with the character by character

const arr3=[]












