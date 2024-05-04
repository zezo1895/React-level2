import { useContext } from "react";
import Context from "./context/Context";

const Layout = () => {
  const {name,theme,toogle} = useContext(Context);
  return (
    <div className={`App ${theme}`} >
        <div>
        <input
        onChange={() => {
          toogle()
        }} type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon" />
          <i className="fas fa-sun" />
          <span className="ball" />
        </label>
      </div>
      <h1>Layout {name}</h1>
    </div>
  );
}

export default Layout;
