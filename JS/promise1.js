fetch("https://api.github.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);
    const parent=document.getElementById("first");
    const image= document.createElement('img');
    // image.src="https://avatars.githubusercontent.com/u/1?v=4";
    image.src=data[0].avatar_url;
    parent.append(image);  
});

