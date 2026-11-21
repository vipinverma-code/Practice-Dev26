import React from 'react'

const App = () => {
  let count=0;
  const handleClick=()=>{
    count++;
    console.log(count);
  }

  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App