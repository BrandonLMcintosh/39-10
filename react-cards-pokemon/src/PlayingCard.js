import React from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipped, toggleFlipped] = useFlip(true);
  return (
    <img
      src={flipped ? front : back}
      alt="playing card"
      onClick={toggleFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
