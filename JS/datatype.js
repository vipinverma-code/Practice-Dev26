// data types

// primitive 
// number,string, boolean, undefined, bigint, null, symbol
// array, object, function

// primitive

// number
// let a=10;
// let b=4.5
// console.log(a,b);
// console.log(typeof a);

// string

// let c="becoming developer";
// console.log(c);
// console.log(typeof c)
// boolean
// let login=true;
// console.log(login);
// console.log(typeof login);

// undefined

let user;
console.log(user);
console.log(typeof user);

// bigint
let num=2722662225n;
console.log(num);
console.log(typeof num);

// null
let arr = null;
console.log(arr);
console.log(typeof arr);

// null 2nd example 

let weather = null;
console.log(weather);
console.log(typeof weather);

// symbol

const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1,id2);
console.log(id1 == id2);
console.log(typeof id1);

// Non Primitive data type

// ARRAY 

let arr1=[10,20,"Rohit","true"];
console.log(arr1);
console.log(typeof arr1);

// Object are key , value pairs

let obj={
    name:"Vipin Verma",
    account:12312,
    age:18,
    category: 'gen'
}
console.log(typeof obj);
// Function

function add(){
    // return("Hello");
    console.log("Hello");
}

// const sum=add();
// console.log(sum);
add();

// js me hm kisi function ko variable me store kra skte hain
let s=function add(){
    // return("Hello");
    console.log("Hello");
}
s();
console.log(typeof s)


// primitive data types are immutable

let a=20;
a=40;
console.log(a);

let str="vipin";
// str="Nitin";
// str[0]="N";
// primitive data types are immutable
console.log(str);


// Non-Primitive data types are mutable

let array=[1,3,"Vipin","Ayush"]
array[0]="Ayush";
array.push("ANushka");
console.log(array);

let object={
    name:"Vipin",
    college:"BBd",
    branch:"it",
}
 object.name="Ayush";
 console.log(object);
 console.log(object.branch);

let c=10;
let d=c;
d=20;
console.log(d);
let obj1={
    name:"Mohan",
    age:20
}

let obj2= obj1;
obj2.name="Rohan";
console.log(obj1);
console.log(obj2);
