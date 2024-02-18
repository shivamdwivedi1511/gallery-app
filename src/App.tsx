import { createContext } from "react";
import "./App.scss";
import Gallery from "./components/Gallery";

function App() {
  const userContext = createContext({ isAutheticated: false });
  return (
    <div className="app">
      <h1 className="heading">gallery app</h1>
      <userContext.Provider value={{ isAutheticated: true }}>
        <Gallery />
      </userContext.Provider>
    </div>
  );
}

export default App;
