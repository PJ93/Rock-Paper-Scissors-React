import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);