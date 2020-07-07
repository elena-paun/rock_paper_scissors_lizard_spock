import React from "react";
import "./styles/background.styles.css";
import { Header } from "./components/Header";
import { Game } from "./components/Game";
function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
