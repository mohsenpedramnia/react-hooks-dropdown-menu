import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hover dropdown menu with react hooks (V 0.02)</h3>
        <div>
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default App;
