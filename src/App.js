import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DropMenu from "./components/DropMenu/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hover dropdown menu with react hooks (V 0.01)</h3>
        <DropMenu />
      </header>
    </div>
  );
}

export default App;
