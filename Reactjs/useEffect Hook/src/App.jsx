import React from 'react'

const App = () => {

   async function GithubInfo() {
     const response = await fetch("https://api.github.com/users");
     const data = await response.json();
   }
   GithubInfo();
  return (
    <>
    <h1>Github User</h1>
   
    </>
  )
}

export default App