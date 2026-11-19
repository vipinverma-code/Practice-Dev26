function Product(props){
    return(
        <>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <h3>{props.category}</h3>
        </>
    )
}

function App(){
    return(
        <>
        <Product name={"Laptop"} price={"55,000"} category={"Electronics"}/>
        <Product name={"Mobile"} price={"25,000"} category={"Electronics"}/>
         <Product name={"Chair"} price={"55,000"} category={"Furniture"}/>
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);