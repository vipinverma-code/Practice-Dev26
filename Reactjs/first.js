// create a h1 element using js.
// const element1 = document.createElement('h1');
// element1.textContent= "Hello Coder army";
// element1.id="first";
// element1.className="element";
// element1.style.fontSize="30px";
// element1.style.backgroundColor="orange";
// element1.style.color="white";

const { createElement } = require("react");

// const { createElement } = require("react");

// element2

// const element2 = document.createElement('h2');
// element2.textContent= "GoingSmall.ai";
// element2.id="second";
// element2.className="element";
// element2.style.fontSize="30px";
// element2.style.backgroundColor="orange";
// element2.style.color="white";

// // Now we have to select the root element
// const parent= document.getElementById('root');
// parent.append(element1,element2);


// so here a problem arises when i have to create 100 elements , so there is a lot of repetitive code , so make reusable we make a function for creating the element

// function createElement(tag,attributes,children){
    // const element = document.createElement(tag);
    // element.textContent=children;
    // // element.className=attributes.className;
    // for (const key in attributes ){
    //     if(key==="style"){
    //         Object.assign(element.style, attributes.style);
    //     }
    //     else{
    //         element[key] = attributes[key];

    //     }
        
    // }
    // return element;
// }

// const element1=createElement("h1",{className:"element", id:"first",style:{fontSize:"30px",backgroundColor:"orange"}},"I want to be a software engineer and digital expert");
// const element2=createElement("h2",{className:"element", id:"second",style:{fontSize:"30px",backgroundColor:"yellow"}},"Going Small Platform is launched soon");

// const parent= document.getElementById('root');
// parent.append(element1,element2);


// Custom React 

// const React = {
//     createElement: function(tag,attributes,children){
//          const element = document.createElement(tag);
//     element.textContent=children;
//     // element.className=attributes.className;
//     for (const key in attributes ){
//         if(key==="style"){
//             Object.assign(element.style, attributes.style);
//         }
//         else{
//             element[key] = attributes[key];
//         }
        
//     }
//     return element;

//     }
// }

// const ReactDOM = {
//     render:function(child,parent){
//         parent.append(child);
//     }

// }


// const element1=React.createElement("h1",{className:"element", id:"first",style:{fontSize:"30px",backgroundColor:"orange"}},"I want to be a software engineer and digital expert");
// const element2=React.createElement("h2",{className:"element", id:"second",style:{fontSize:"30px",backgroundColor:"yellow"}},"Going Small Platform is launched soon");
// const parent=document.getElementById('root');
// // parent.append(element1,element2);

// ReactDOM.render(element1,parent);
// ReactDOM.render(element2,parent);



// React and React DOM implementation by simple CDN links not by custom React

const element1=React.createElement("h1",{className:"element",id:"first", style:{backgroundColor:"chocolate",color:"white"}},"hello , do work consistently");
const element2=React.createElement("h2",{className:"element",id:"second", style:{backgroundColor:"cornsilk",color:"white"}},"hello , do work consistently with confidence and patience");
console.log(element1);

const parent=document.getElementById("root");
ReactDOM.render(element1,parent);





// Original React ANd ReactDOM Means

const React={
    createElement: function(type,props,children){
        return {
            type:type,
            props:{
                ...props,
                children:children
            }
        }
    }
}

// react only tells the ui structure .


// const ReactDOM ={
//     render:function(reactElement,root){
//         root.innerHTML="";
//         const element = document.createElement(reactElement.type);
//         const {props} = reactElement;

//         for(const key in props){
//             if(key==='style'){
//                 Object.assign(element.style,props.style);
//             }
//             else if(key==="children"){
//                 element.textContent = props[key];
//             }
//             else{
//                 element[key] = props[key];
//             }
//         }
//     }
// }


// const element3= React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px"}});
// ReactDOM.render(element3,document.getElementById('root'));

// React Dom actually build the ui , it creates dom elements.