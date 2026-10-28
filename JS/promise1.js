// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     const parent=document.getElementById("first");
//     // for displaying the image of 30 users
//     for(let i=0; i<=data.length; i++){
//     const image= document.createElement('img');
//     // image.src="https://avatars.githubusercontent.com/u/1?v=4";
//     image.src=data[i].avatar_url;
//     image.style.height="50px";
//     image.style.width="50px";
//     parent.append(image);
// }});


// const j1= {
//     name: "Vipin Verma",
//     age: 30,
//     address: "lmp",
//     c: "undefined",
// }

// convert this object into json format

// const  jsonFormat= JSON.stringify(j1);
// console.log(jsonFormat);


// now learn the conversion of json into JS Object format

const user=`{
    "name":"Vipin Verma",
    "age":"22",
    "profession":"developer and digital expert",
    "address":"lmp"
}`

// convert this json format data into js object 


const user2=JSON.parse(user);
console.log(user2);


