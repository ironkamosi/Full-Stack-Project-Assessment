import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CounterButtons = () => {
  const [likeCounter, setLikeCounter] = useState(0);

  function handleClick(e) {
    e.target.id === "like-button"
      ? setLikeCounter(likeCounter + 1)
      : setLikeCounter(likeCounter - 1);
    console.log("The button has been clicked.");
  }

  return (
    <div>
      <Button id="like-button" variant="primary" onClick={handleClick}>
        &#128077;
      </Button>{" "}
      <Button id="dislike_button" variant="primary" onClick={handleClick}>
        &#128078;
      </Button>{" "}
      <span
        className={
          likeCounter === 0 ? "black" : likeCounter > 0 ? "green" : "red"
        }
      >
        {likeCounter}
      </span>
    </div>
  );
};

export default CounterButtons;
