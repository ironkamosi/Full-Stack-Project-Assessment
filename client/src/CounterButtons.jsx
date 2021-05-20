import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const CounterButtons = ({rating}) => {
  const [likeCounter, setLikeCounter] = useState(rating || 0);

  function handleClick(e) {
    e.preventDefault();
    // console.log("e target",e.target)
    if (e.target.name === "like-button") {
      console.log("like name")
    }
    
   if (e.target.className === "dislike-button") {
          console.log(" dislike name");
    }
 
    e.target.name === "like-button"
      ? setLikeCounter(likeCounter + 1)
      : setLikeCounter(likeCounter - 1);
            // e.stopPropagation();

    // console.log("The button has been clicked.");
  }

  return (
    <div>
      <Button name="like-button" variant="primary" onClick={handleClick}>
          <FaThumbsUp />
      </Button>{" "}
      <Button name="dislike-button" variant="primary" onClick={handleClick}>
          <FaThumbsDown />
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
