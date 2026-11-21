// import React from 'react'


// React hme help krta hai ki her elemement ko manually select na pde.
// React me React dom automatically state change ke according ui ko update krta hai.




// const App = () => {

//   let count=0;
//   function Increment(){
//     count++;
//     const para=document.querySelector('p');
//     para.textContent=`Counter:${count}`;
//     const button= document.querySelector('button');
//     button.textContent=`Increment: ${count}`;
    

//   }
//   return (
//     <>
//     <p>Counter:{count}</p>
//     <button onClick={Increment} >Increment:{count}</button>
//     </>
//   )
// }

// export default App





import React from 'react'
import { useState } from 'react'
const App = () => {
  
  const[count,setCount]=useState(0);

  const handleClick=()=>{
    setCount(count+1);
  }


  return (
    <>
    <p>Counter:{count}</p>
    <button onClick={handleClick}>Increment:{count}</button>
    </>
  )
}
export default App