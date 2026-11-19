function Header(props){
    return(
        <h1>{props.name}This is the header of Going Small Official Website.</h1>
    )
}

function Main(){
    return(
        <h1>This is the Main Section of Going Small</h1>
    )
}

function Footer(){
    return(
        <h1>It is the footer content.</h1>
    )
}

function App(){
    return(
        <>
        <Header name={"Vipin Verma"}/>
        <Main/>
        <Footer/>
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);