const element1= <h1>Welcome to React!</h1>;
const element2=<p>Hello Vipin, start your React journey</p>
const element3= <button style={{ backgroundColor:"blue", color:"white" }}>Get Started</button>

const div= React.createElement('div','null',element1,element2,element3);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

