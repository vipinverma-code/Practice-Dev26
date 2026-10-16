// objects in javascript
// key value

// const user={
//     name: "Vipin",
//     age: 22,
//     emailId: 'vipin@wehandle.in',
//     amount: 3400,
//     "home address" : "lmp"
// }

// console.log( typeof user);
// to access the individual value of a key
// Crud operation : Create , Read, Update , Delete

// console.log(user.name);
// console.log(user["name"]);


// Update operation
// user.aadhar= 125662537737;
// user.amount= 644788;
// console.log(user);

// delete

// delete user.emailId;
// console.log(user);

// const user={
//     name: "Vipin",
//     age: 22,
//     emailId: 'vipin@wehandle.in',
//     amount: 3400,
//     "home address" : "lmp"
// }

// const user2 = user;
// user2.age = 90;
// console.log(user);
// ynha per user2 aur user same hi reference ko point kr rhe hain. agar aap user me koi changes kr rhe vo user2 me bhi reflect hoga.

// to fetch the keys, values, entries.
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(typeof(Object.entries(user)));

// iteration over the object with the help of for in and for of loop

// for(let keys in user){
//     console.log(keys,user[keys]);
// }

// with the help of forof loop
// here user ek normal object hai ispe for of loop kaam nhi krta hai.


// for(let keys of Object.keys(user)){
//   console.log(keys,user[keys]);
// }

// if you want both keys and values with the help of loop

// for(let[keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// now text topic is object destucturing

// const user={
//     name: "Vipin",
//     age: 22,
//     emailId: 'vipin@wehandle.in',
//     amount: 3400,
//     "home address" : "lmp"
// }

// const {name,age,amount}=user;
// console.log(name,age,amount);

// now we see array destucturing

// const arr=[10,30,48,"Vipin"];
// const [first,second] = arr;
// console.log(first,second);

// function creation inside the object , that is known as method.


// const user={
//     name: "Vipin",
//     age: 22,
//     emailId: 'vipin@wehandle.in',
//     amount: 3400,
//     "home address" : "lmp",
//     greeting: function(){
//         console.log("Becoming developer soon!");
//         return 20;
//     }
// }

// function called through the object
// const returnvalue= user.greeting(); 
// console.log(returnvalue);

// this is a keyword that refers to the object that is currently executing the function.

// const user={
//     name: "Vipin",
//     age: 22,
//     emailId: 'vipin@wehandle.in',
//     amount: 3400,
//     "home_address" : "lmp",
//     greeting: function(){
//         console.log(`Becoming developer soon! ${this.name}`);
//         return 20;
//     }
// }
// user.greeting();


// nested object : object inside object

// const user={
//     name:"Vipin Verma",
//     age: 20,
//     emailId: "vipin@gmail.com",
//     amount: 3400,
//     address: {
//         city:"lmp",
//         pincode:"262701"
//     }
// }



// shallow copy 
// const user2= {...user};
// user.name="Ayush Verma";  top level ke liye to ye independent copy create kr rha hai 
// user.address.city="lko";  
// ynha per ye independent copy create nhi kr rha hai. 
// so for nested object 


// this is the concept of deep copy
// const user2= structuredClone(user);
// user.address.city="lko";  
// console.log(user2);

// console.log(user2);
// console.log(user.address);
// console.log(user.address.city);


// now key also can be represented in the form of numbers , because behind the sceen key also represented in the form of strings.

// const user={
//     name:"Vipin Verma",
//     age: 20,
//     emailId: "vipin@gmail.com",
//     amount: 3400,
//     address: {
//         city:"lmp",
//         pincode:"262701"
//     },

//     0:"You don't give up",
//     1:"Your mother waiting for your first success",
//     2:"do hard work, believe rkho confidence mt todo ho jayega"
// }

// console.log(user["0"]);
// console.log(user["1"]);
// console.log(user['2']);


// Internally arrays are stored in the form of object.
// keys string aur symbol dono ho skti hai.
const sym = Symbol("id");
console.log(sym);
// const user= {
//     name:"Vipin Verma",
//     age: 20,
//     emailId: "vipin@gmail.com",
//     amount: 3400,
//     address: {
//         city:"lmp",
//         pincode:"262701"
//     },

//     0:"You don't give up",
//     1:"Your mother waiting for your first success",
//     2:"do hard work, believe rkho confidence mt todo ho jayega",
//     [sym]: "Hello , how are you"
// }

// console.log(user["0"]);
// console.log(user["1"]);
// console.log(user['2']);
// console.log(user[sym]);