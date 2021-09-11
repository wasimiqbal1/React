import './App.css';

let name = "React";
function App() {
    return (
        <>
        <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </nav>
        <div className="container">
            <h1>Hello {name}</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus totam libero porro maxime ipsum laboriosam explicabo nam perferendis, autem, eius fugiat! Deleniti ipsam ducimus expedita obcaecati id debitis, numquam vel!
            </p>
        </div>
        </>
 
    );
}
export default App;