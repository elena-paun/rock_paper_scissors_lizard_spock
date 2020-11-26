import React from 'react'
import "./styles/background.styles.css";
import { Header } from "./components/Header";
import { Game } from "./components/Game";
import { GameProvider } from './components/GameContext'

function App() {

  return (
    <GameProvider>
      <div className="App">
        <Header />
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
