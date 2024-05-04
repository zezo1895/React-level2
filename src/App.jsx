import { useState } from "react";
import "./App.css";
import "../src/theme.css"

function App() {
  const [name, setName] = useState("Ziad");
  const [age, setAge] = useState(20);
  const [theme, setTheme] = useState("");

  return (
    <div className={`App ${theme}`}>
      <div >
        <button
          onClick={() => {
            setTheme("pink");
          }}
          style={{ marginRight: "15px" }}
        >
          Pink
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          style={{ marginRight: "15px" }}
        >
          Dark
        </button>
        <button
          style={{ marginRight: "15px" }}
          onClick={() => {
            setTheme("light");
          }}
        >
          light
        </button>
      </div>
      <h1>
        My name is {name} ,My age is {age}
      </h1>
      <div className="card">
      
        <button
          onClick={() => {
            setName("Elzoz");
            setAge(21);
          }}
        >
          Change name
        </button>
      </div>
    </div>
  );
}

export default App;
