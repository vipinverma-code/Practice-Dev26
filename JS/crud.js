// // const element=document.createElement("h2");
// // // element.textContent="Strike is coming";
// // console.log(element);



// // select the element.
// const h1=document.getElementById("first");
// // h1.after(element);
// // h1.before(element);


// // creating a new element writing diwali aane vali hai

// const newelement=document.createElement("h3");
// newelement.textContent="Diwali aa rhi hai";
// newelement.id="second";
// // newelement.className="diwali";
// newelement.classList.add("diwali");
// newelement.style.backgroundColor="yellow";
// newelement.getAttribute("second");
// console.log(newelement);
// h1.after(newelement);

// const list=document.createElement("li");
// list.textContent="Halwa";
// const list2=document.createElement("li");
// list2.textContent="Milk";
// list2.id="milk";

// const list3= document.createElement("li");
// list3.textContent="Cake";

// const list4= document.createElement("li");
// list3.textContent="Paneer";
// const selected_element=document.getElementById("listing");
// selected_element.append(list,list2,list3);

// console.log(selected_element);
// list2.after(list4);


// iteration of loop to an array , put these array elemnts into list items 

const arr=["Milk", "Halwa","Paneer","tofu","Tea"];
const unorderedelement= document.getElementById("listing");
const fragment=document.createDocumentFragment()
for(let food of arr){
    const list=document.createElement("li");
    list .textContent=food;
   fragment.append(list);
}
unorderedelement.append(fragment);


// now lwaern how the remove the element from the ui 
const element=document.getElementById("first");
// element.remove();
console.log(element);

