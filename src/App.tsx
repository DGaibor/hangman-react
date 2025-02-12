import './App.css'
import { Game } from './components/Game/Game.tsx';
import { GameProvider } from './context/GameContext.tsx';

function App() {

  return (
    <>
        <GameProvider>
            <Game/>
        </GameProvider>
        
    </>
  )
}

export default App
