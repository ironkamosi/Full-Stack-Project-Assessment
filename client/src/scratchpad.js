// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// const CounterButtons = () => {
//   const [likeCounter, setLikeCounter] = useState(0);

//   function handleClickLike(e) {
//     e.preventDefault();
//     e.target.id === "like-btn"
//       ? setLikeCounter(likeCounter + 1)
//       : setLikeCounter(likeCounter - 1);
//     console.log("The like button was clicked.");
//   }

//   function handleClickDislike(e) {
//     e.preventDefault();
//     setLikeCounter(likeCounter - 1);
//     console.log("The dislike button was clicked.");
//   }

//   return (
//     <div>
//       <Button id="like-btn" variant="primary" onClick={handleClickLike}>
//         &#128077;
//       </Button>{" "}
//       <Button id="dislike-btn" variant="primary" onClick={handleClickDislike}>
//         &#128078;
//       </Button>{" "}
//       <span>{likeCounter}</span>
//     </div>
//   );
// };

// export default CounterButtons;

// /*
// &#128077;
// &#x1F44D;
// */


// delete button
// const DeleteButton = (props) => {
//   function handleClick(e) {
//     e.preventDefault();
//     props.deleteHandler(props.videoId) 
//   }
//   return (
//     <Button onClick={handleClick}  variant="primary">
//       Delete
//     </Button>
//   );
// };

