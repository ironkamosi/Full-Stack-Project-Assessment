import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const CounterButtons = (props) => {
  let counterLikes = props.rating;
  function handleClick(e) {
    e.preventDefault();
    e.target.className.includes("fas fa-thumbs-up")
      ? (counterLikes += 1)
      : (counterLikes -= 1);

    props.onUpdateRating(counterLikes);
  }

  return (
    <div>
      <Button variant="primary">
        <i className="fas fa-thumbs-up" onClick={handleClick}></i>
      </Button>{" "}
      <Button variant="primary">
        <i className="fas fa-thumbs-down" onClick={handleClick}></i>
      </Button>
      <span
        className={
          props.rating === 0 ? "black" : props.rating > 0 ? "green" : "red"
        }
      >
        {props.rating}
      </span>
    </div>
  );
};

export default CounterButtons;
