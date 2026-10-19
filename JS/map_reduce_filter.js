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
const arr = [10,20,30,5,90,87];

// this is the custom method of arr which is filtering
// to make general use Array.prototype.
Array.prototype.filtering = function(compare){
    const ans=[];
    for(let num of arr){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}

// const newarr=arr.filtering((num)=> num>25);
// console.log(newarr);

// const a1=[10,20,45,69,38];
// const newa1=a1.filtering((num)=> num>25);
// console.log(newa1);


// use case of filter method i.e. data cleaning (removing falsy values)
// const a="";
// console.log(a.length);
const data=["Vipin",20,"",null, undefined];
// const newdata= data.filter((item)=>item);
// const newdata= data.filter(Boolean);
// console.log(newdata);
