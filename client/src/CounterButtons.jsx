import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import "./CounterButtons.css";
const CounterButtons = () => {
  const [likeCounter, setLikeCounter] = useState(0);
  const [counterColour, setCounterColour] = useState("black");

  function changeCounterColour(likeCounter) {
    likeCounter < 0
      ? setCounterColour("red")
      : setCounterColour("green");
  }
  function handleClick(e) {
    e.preventDefault();
    e.target.id === "like-btn"
      ? setLikeCounter(likeCounter + 1)
      : setLikeCounter(likeCounter - 1);
    changeCounterColour(likeCounter);
    console.log("The button has been clicked.");
  }
  return (
    <div>
      <Button id="like-btn" variant="primary" onClick={handleClick}>
        &#128077;
      </Button>{" "}
      <Button id="dislike-btn" variant="primary" onClick={handleClick}>
        &#128078;
      </Button>{" "}
      <span className={counterColour}>{likeCounter}</span>
    </div>
  );
};

export default CounterButtons;
