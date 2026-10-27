// console.log("Hello Ji");
// setTimeout(()=> {
//     console.log("Time out executed");
// },5000);

// console.log("Hello Ji");
// setTimeout(()=> {
//     console.log("Time out executed");
// },6000);
// console.log("I am end");


// Web APi is justa function all
// let arr=[100,20,90,70];
// arr.push(10);
// console.log(arr);

// function hello(){
//     console.log("Hii jii");
// }
// hello();


console.log("Start the opearation");

fetch("https://api.github.com/users").then(()=>{
    console.log("Github user info");
})

console.log("end of opeartion");

