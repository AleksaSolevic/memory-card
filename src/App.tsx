import './App.css';
import { memoryCards } from './memory.data';
import GameBoard from './components/GameBoard';

function App() {

  return (
    <>
      <h1>Memory</h1>

      <GameBoard data={memoryCards} />
    </>
  )
}

export default App
