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

  function handleCardClick(id: number, value: string) {
    if (!card1) {
      setCard1({ id, value })
    } else if (!card2 && card1.id !== id) {
      setCard2({ id, value })
    }
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

  return (
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
  )
}
