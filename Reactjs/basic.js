// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// const element= React.createElement('h1',{id:"first"}, "I am frontned developer soon");
// const element2= React.createElement('h2',{id:"second"}, "I am frontned developer soon , don't worry");
// const div= React.createElement('div','null',element,element2)
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(div);

//  It is the complex way of creating elements in the React.


// const element1 =<h1 id="omg" className="first">Hello , Good to see you!</h1>
// console.log(element3);

// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>
//         Hi
//     </h2>
// </div>)


// const element3=(
//     <>
//     <h1>Hello Going Small Platform</h1>
//     <h2>How are you going?</h2>
//     </>
// )


// React Components

// function App(){
//     return(
//         <h1>Hello, Going Small Platform is going Crazy to use for the students </h1>
//     )
// }

// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(App());
// root.render(<App/>);


// to find out the value of a expression or mathematical operation , write it in the form of {}

// text/element : Javascript ke expression ke andar ho skta hai .
// Number, String print ho jayegi
// null, undefined, false , true, ye kuch print nhi hoga blank rhega
// array jo hai print ho jayega .


// const opeartion= <h1>Hello eveyone {[10,30,50,80,90,120]}</h1>
// const opeartion= <h1>Hello eveyone {[10,50,70,34,80]}</h1>
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(opeartion);



const courses=["HTML", "CSS","JS","React"]
const element= <ul>
    {courses.map((course,idx)=><li>{course}</li>) }
</ul>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

