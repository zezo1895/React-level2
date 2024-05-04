import "./App.css";
import "../src/theme.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "./context/Context";

function App() {
  const { name, age, theme, changeall, changetheme, toogle } =
    useContext(Context);
  return (
    <div className={`App ${theme}`}>
      <Link to="/layout">Layout</Link>
      <button
        onClick={() => {
          toogle();
        }}
        style={{ marginBottom: "20px" }}
      >
        Toogle
      </button>

      <div>
        <input
          onChange={() => {
            toogle();
          }}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon" />
          <i className="fas fa-sun" />
          <span className="ball" />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            changetheme("pink");
          }}
          style={{ marginRight: "15px" }}
        >
          Pink
        </button>
        <button
          onClick={() => {
            changetheme("dark");
          }}
          style={{ marginRight: "15px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            changetheme("light");
          }}
          style={{ marginRight: "15px" }}
        >
          light
        </button>
      </div>
      <h1>
        My name is {name} ,My age is {age}{" "}
      </h1>
      <div className="card">
        <button
          onClick={() => {
            changeall();
          }}
        >
          Change name
        </button>
      </div>
    </div>
  );
}

export default App;
