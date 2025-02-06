import { useEffect, useState } from "react";
import { CardType } from "../memory.data"
import Card from "./Card";

type GameBoardProps = {
  data: CardType[];
}

export default function GameBoard({data}: GameBoardProps) {

  const [clickCount, setClickCount] = useState(0);
  const [card1, setCard1] = useState('');
  const [card2, setCard2] = useState('');

  function handleCardClick(id: number, value: string, isVisible: boolean) {

    console.log(id);

    if (!isVisible) {
      setClickCount((prevCount) => prevCount + 1);
      if (clickCount === 0) setCard1(value);
      if (clickCount === 1) setCard2(value);
    }
  }

  useEffect(() => {
    if (clickCount === 2) {
      if (card1 === card2) console.log("Correct!");
      setClickCount(0);
    }

  }, [clickCount]);

  return (
    <ul className="game-board">
      {data.map(item => (
        <Card
          onSetVisibility={handleCardClick}
          isVisible={false}
          key={item.id} id={item.id} value={item.value} />
      ))}
    </ul>
  )
}
