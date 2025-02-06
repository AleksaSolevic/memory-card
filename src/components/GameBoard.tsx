import { useEffect, useState } from "react";
import { CardType } from "../memory.data"
import Card from "./Card";

type GameBoardProps = {
  data: CardType[];
}

export default function GameBoard({data}: GameBoardProps) {
  const [card1, setCard1] = useState<{ id: number; value: string } | null>(null)
  const [card2, setCard2] = useState<{ id: number; value: string } | null>(null)
  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const [isGameWon, setIsGameWon] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isGameStarted, setIsGameStarted] = useState(false)

  function handleCardClick(id: number, value: string) {
    if (isGameWon) return
    if (!card1) {
      setCard1({ id, value })
    } else if (!card2 && card1.id !== id) {
      setCard2({ id, value })
    }
  }

  function resetGame() {
    setCard1(null)
    setCard2(null)
    setMatchedCards([])
    setIsGameWon(false)
    setTimer(0)
    setIsGameStarted(false)
  }

  useEffect(() => {
    if (card1 && card2) {
      if (card1.value === card2.value) {
        setMatchedCards([...matchedCards, card1.id, card2.id])
        setCard1(null)
        setCard2(null)
      } else {
        setTimeout(() => {
          setCard1(null)
          setCard2(null)
        }, 1000)
      }
    }
  }, [card1, card2])

  useEffect(() => {
    if (matchedCards.length === data.length) {
      setIsGameWon(true)
    }
  }, [matchedCards, data.length])

  useEffect(() => {
    let interval: number
    if (isGameStarted && !isGameWon) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isGameStarted, isGameWon])

  useEffect(() => {
    if (!isGameStarted && (card1 || card2)) {
      setIsGameStarted(true)
    }
  }, [card1, card2])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `⏱️ ${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div>
      <div className="game-header">
        <span className="timer">{formatTime(timer)}</span>
      </div>
      <ul className="game-board">
        {data.map((item) => (
          <Card
            getID={handleCardClick}
            isVisible={card1?.id === item.id || card2?.id === item.id}
            isMatch={matchedCards.includes(item.id)}
            key={item.id}
            id={item.id}
            value={item.value}
          />
        ))}
      </ul>

      {isGameWon && (
        <div className="win-message">
          <h2>Congratulations! You won!</h2>
          <p>Your time: {formatTime(timer)}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  )
}
