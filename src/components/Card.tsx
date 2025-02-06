import { useState } from "react";

type CardProps = {
  isVisible: boolean;
  id: number;
  value: string;
  onSetVisibility: (id: number, value: string, isVisible: boolean) => void;
}

export default function Card({id, value, onSetVisibility}: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li
      className={`game-card ${isVisible ? 'visible' : 'hidden'}`}
      onClick={() => {
        setIsVisible(true);
        onSetVisibility(id, value, isVisible);  // Get card value
      }}
    >
      {value}
    </li>
  )
}
