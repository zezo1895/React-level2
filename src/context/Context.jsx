import { createContext, useReducer } from "react";

const Datacontext = createContext();
const start = { name: "ZIAD", age: 20, theme: "light" };
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...firstState, name: action.NEW_N };
    case "CHANGE_AGE":
      return { ...firstState, age: action.NEW_N };
    case "CHANGE_THEME":
      return { ...firstState, theme: action.NEW_N };
    case "CHANGE_TOO":
      return { ...firstState, theme: action.NEW_N };

    default:
      return firstState;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, start);

  const changeall = () => {
    dispatch({ type: "CHANGE_NAME", NEW_N: "ELZOZ" });
    dispatch({ type: "CHANGE_AGE", NEW_N: 21 });
  };
  const changetheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", NEW_N: theme });
  };
  const toogle = () => {
    dispatch({
      type: "CHANGE_THEME",
      NEW_N: firstState.theme == "light" ? "dark" : "light",
    });
  };
  return (
    <Datacontext.Provider
      value={{ ...firstState, changeall, changetheme, toogle }}
    >
      {children}
    </Datacontext.Provider>
  );
}
export default Datacontext;
