// Strings
// const str1 = "Rohit";
// const str2 = 'Rohit Sharma';
// const str3 = `Becoming developer soon!`
// console.log(str1,str2,str3);
// console.log(str3.length);
// console.log(str3[0]);
// str3[9] = "D";  because strings are immutable
// console.log(str3.toUpperCase());

// checking the substring

// const str4 = `Becoming soon developer soon!`

// console.log(str4.indexOf("developer"));
// console.log(str4.lastIndexOf("soon"));
// console.log(str4.includes("soon"));

// extracting the substrings

const str=`Hello Coder Army Coder`;
// slice
// console.log(str.slice(2,5));

// console.log(str);
// means original string me koi change nhi aayega , because strings are immutable , new strings can be formed.
// console.log(str.slice(3));
// console.log(str.slice(-4));
console.log(str.slice(0,5,2));

// js me string slicing me do hai parameters hote hai , first index, last index , step index nhi hota hai.

// Replace Substrings

const string = `Hello , we are going to fetch the market ,Hii`;
console.log(string.replace("Hello", "Hi"));
// console.log(string); original string don't change because it is immutable
console.log(string.replaceAll("Hello", "Hi"));

// trim method is used to remove the spaces from the beginning and the end  of a string

const string1=`  hello , i am breaking the curse of my family   `;
console.log(string1.trim());
// console.log(string1); trimStart(), trimEnd() two are also methods

// concatenation of string
const a="Vipin"
const b="Verma"
console.log(a + " " + b);
console.log("Vipin" + 10 + "Verma");

// Splitting of strings

// const names="Rohit Mohit Suraj Rohan Anjali";
// console.log(names.split(' '));


// now we are coming to the date topic

const now= new Date();
console.log(now);
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.getDay());
console.log(now.getMonth());

// days: Mon-tue(1 based)
// Month: 0 1

const date= new Date(2026,9,13,1,10,25);
console.log(date.toString());


