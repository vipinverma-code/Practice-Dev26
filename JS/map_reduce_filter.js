// today we studied about map, reduce ,filter method.

// const arr = [10,20,30,5,90,87];
// // iteration with the help of forEach loop.
// let sum=0;
// arr.forEach((num)=>{
//     sum+=num;
// })
// console.log(sum);

// filter
// ye ek new array return krta hai , original array me koi change nhi hota hai.

// const array=[10,20,45,35,78];
// const array1=array.filter((num)=>{
//     return(
//         num>45
//     );
// }
// )
// console.log(array1);
// const compare= (num)=>num>25;
// const arr = [10,20,30,5,90,87];

// this is the custom method of arr which is filtering
// to make general use Array.prototype.
// Array.prototype.filtering = function(compare){
//     const ans=[];
//     for(let num of arr){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// const newarr=arr.filtering((num)=> num>25);
// console.log(newarr);

// const a1=[10,20,45,69,38];
// const newa1=a1.filtering((num)=> num>25);
// console.log(newa1);


// use case of filter method i.e. data cleaning (removing falsy values)
// const a="";
// console.log(a.length);
// const data=["Vipin",20,"",null, undefined];
// const newdata= data.filter((item)=>item);
// const newdata= data.filter(Boolean);
// console.log(newdata);




const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];
// 1.products which have prce less than 50;
// const newproducts= products.filter((product)=>product.price> 50);

// 2. products which have prce less than 50 , arrange it in descending order.
// const newproducts= products.filter((product)=> product.price >50).sort((a,b)=>b.price-a.price);
// console.log(newproducts);

// map 
const newdata= products.map((item)=> ({name:item.name, price:item.price}));
console.log(newdata);

// reduce method()

const totalprice = products.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.price;

},0);

console.log(totalprice);


// Data structure: set

const arr=[10,20,30,10,25,15,10,25];
console.log(arr);

// const s1=new Set(arr);

const s1=new Set();
s1.add(11);
console.log(s1);
console.log(s1.has(20));
s1.delete(11);
s1.clear();
console.log(s1);

// Set is used to remove the duplicacy of array elements , so creating the set of that array elemts and remove duplicacay.

const email= ["ro@gm","ra@gm", "mo@gm","ro@gm"];
const uniqueemail=new Set(email);
console.log(uniqueemail);


// now again conversion of set into array.

const uniqueEmail = [... new Set(email)];
console.log(uniqueEmail);



// map: it is a data structure which store any 
const m1=new Map(
    [
        ["ROhit",40],
        [2,"Vipin"],
        [true,11],
        [[10,30,11],"Mohit"]  ]
);
console.log(m1);

m1.set({name:"vipin", age:20}, false);
console.log(m1.get("ROhit"));
console.log(m1);
