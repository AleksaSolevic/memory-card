type CardProps = {
  isVisible: boolean
  id: number
  value: string
  isMatch: boolean
  getID: (id: number, value: string) => void
}

export default function Card({
  id,
  value,
  isMatch,
  isVisible,
  getID,
}: CardProps) {
  return (
    <li
      className={`game-card ${isVisible || isMatch ? "visible" : "hidden"}`}
      onClick={() => {
        if (!isMatch && !isVisible) {
          getID(id, value)
        }
      }}
    >
      {value}
    </li>
  )
}
