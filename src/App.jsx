
import "./App.css";
import "../src/theme.css";
import { useReducer } from "react";

const start={name:"ZIAD",age:20,theme:"light"}


const reducer = (state ,action) => {
  switch(action.type){
  case "CHANGE":
  return{...state,name:action.NEW};
  case "CHANGE_AGE":
    return{...state,age:action.NEWA}
  case"TOO":
  return{...state,theme:action.NEW}
  case"THEME":
  return{...state,theme:action.NEW}
default:
  return state

  }
}



function App() {
  const [all, dispatch] = useReducer(reducer, start);

  return (
    <div className={`App ${all.theme}`}>
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => {
          dispatch({type:"TOO",NEW:all.theme=="light" ? "dark":"light"})
        }}
      >
        Toogle
      </button>

      <div>
        <input   onChange={() => {
          dispatch({type:"TOO",NEW:all.theme=="light" ? "dark":"light"})
        }}
         type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon" />
          <i className="fas fa-sun" />
          <span className="ball" />
        </label>
      </div>
      <div>
        <button
        onClick={() => {
          dispatch({type:"THEME",NEW:"pink"})
        }}
          style={{ marginRight: "15px" }}
        >
          Pink
        </button>
        <button
          onClick={() => {
            dispatch({type:"THEME",NEW:"dark"})
          }}
          
          style={{ marginRight: "15px" }}
        >
          Dark
        </button>
        <button
          style={{ marginRight: "15px" }}
        
          onClick={() => {
            dispatch({type:"THEME",NEW:"light"})
          }}
        >
          light
        </button>
      </div>
      <h1>
        My name is {all.name}  ,My age is {all.age}
      </h1>
      <div className="card">
        <button
        onClick={() => {
          dispatch({type:"CHANGE",NEW:"ELZOZ",NEWA:21})
          dispatch({type:"CHANGE_AGE",NEWA:21})
        }}
        
        >
          Change name
        </button>
      </div>
    </div>
  );
}

export default App;
