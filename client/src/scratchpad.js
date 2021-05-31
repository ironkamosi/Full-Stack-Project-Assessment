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
    
    /////// toggle

    // import React from "react";
    // import VideoCard from "./VideoCard.jsx";

    // function compare(videoOne, videoTwo) {
    //   //descending top to bottom
    //   // This helps put the array in order
    //   if (videoOne.rating > videoTwo.rating) {
    //     return -1;
    //   }
    //   if (videoOne.rating < videoTwo.rating) {
    //     return 1;
    //   }
    //   return 0;
    // }

    // const VideoCards = (props) => {
    //   // console.log("videoC's", props)
    //   // const sortedData = props.videos.sort(compare);
    //   // let toggleData = props.videos.sort((a, b) => a.rating - b.rating); // comparing two objects
    //   // console.log("pv", props.videos)

    //   // const [sortedData, setSortedData] = useState(props.videos) // the data is intialised with the videos array
    //   let sortedData = props.videos;

    //   return (
    //     <div>
    //       <button
    //         className="toggle-btn"
    //         onClick={
    //           () => {
    //             sortedData = props.videos.sort((a, b) => a.rating - b.rating);
    //           } // the function will not get excuted when the compoent is intialised
    //         }
    //       >
    //         Toggle Ratings
    //       </button>
    //       {console.log(sortedData)}

    //       {sortedData.map((video, index) => {
    //         return (
    //           <div>
    //             <VideoCard
    //               video={video} // current video that we want to display
    //               videos={sortedData} // current video that
    //               setVideos={props.setVideos} // useState set function
    //               key={index}
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // };

    // export default VideoCards;

    
    
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