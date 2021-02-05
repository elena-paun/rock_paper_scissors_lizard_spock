import React from 'react'
import './styles/background.styles.css';
import { Header } from './components/containers/header';
import { Game } from './components/containers/game-container';
import { GameProvider } from './components/provider/game-context'

function App() {

  return (
    <GameProvider>
      <div className='App'>
        <Header />
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
