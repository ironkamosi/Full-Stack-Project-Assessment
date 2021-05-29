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

/////////////////////////////
//video card


  // useEffect(() => {
    // DELETE request using fetch inside useEffect React hook
    // fetch(`http://127.0.0.1:5000/${id}`, {
    //   method: "DELETE",
    // });
      
      // .then(() => setStatus("Delete successful"));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
    
    
    
    
// useEffect(() => {
//   // DELETE request using fetch inside useEffect React hook
//   fetch(`http://127.0.0.1:5000/${id}`, {
//     method: "DELETE",
//   }).then(() => console.log("de"));

//   // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);















    // fetch(`http://127.0.0.1:5000/523523`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: null,
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) =>
    //     // this is the data we get after putting our data, do whatever you want with this data
    //     console.log(data)
        
    //   );

    // fetch(`http://127.0.0.1:5000/${id}`, {
    //   // Adding method type
    //   method: "DELETE",

    //   // Adding body or contents to send
    //   body: null,

    //   // Adding headers to the request
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   // Converting to JSON
    //   .then((response) => response)
    //   // Displaying results to console
    //   .then((json) => {
    //     if (json.status === 200) {
    //       const videoIndex = video.videos.findIndex(
    //         (video) => video.id === parseInt(videoId)
    //       );
    //       if (videoIndex >= 0) {
    //         // video.videos.splice(videoIndex, 1);
    //         video.setVideos(video.videos);
    //       }
    //     }
    //     return console.log("res stat", json.status);
    //   })
    //   .catch((error) => console.log(error));