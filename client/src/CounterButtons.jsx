import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const CounterButtons = (props) => {
  // const [likeCounter, setLikeCounter] = useState(props.rating || 0);

  let counterLikes = props.rating
  function handleClick(e) {
    e.preventDefault();
    console.log("e target", e.target.className);
    if (e.target.name === "like-button") {
      console.log("like name");
    }

    if (e.target.className === "dislike-button") {
      console.log(" dislike name");
    }

    // e.target.className === "like-btn"
    e.target.className.includes("fas fa-thumbs-up")
      ? (counterLikes += 1)
      : (counterLikes -= 1);
    // ? setLikeCounter(props.rating + 1)
    // : setLikeCounter(props.rating - 1);
    console.log("likeCounter", props.rating);
    //  props.onUpdateRating(props.rating);
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
