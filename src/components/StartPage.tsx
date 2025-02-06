type StartPageProps = {
  onStartGame: () => void
}

export default function StartPage({ onStartGame }: StartPageProps) {
  return (
    <div className="start-page">
      <h1>🎮 Memory Game Challenge</h1>
      <div className="instructions">
        <p>
          Welcome to the Memory Game! Test your memory skills by matching pairs
          of cards.
        </p>
        <ul>
          <li>Click on any card to reveal it</li>
          <li>Find matching pairs to keep them visible</li>
          <li>Complete the game as fast as you can!</li>
        </ul>
      </div>
      <button
        className="start-button"
        onClick={onStartGame}
      >
        Start Game
      </button>
    </div>
  )
}
