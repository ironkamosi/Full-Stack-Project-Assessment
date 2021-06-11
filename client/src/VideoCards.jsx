import React,{useState} from "react";
import VideoCard from "./VideoCard.jsx";

const VideoCards = (props) => {
const [toggle,setToggle]= useState()

  // POST request using fetch()
    fetch(`https://youtube-videos-db.herokuapp.com/`, {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify(),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((json) => {
        console.log(json);
        //right here: first time we know the ID for the video
      })
      .catch((e) => console.log(e));

  
  return (
    <div>
      <button>
        Toggle Ratings
      </button>

      {.map((video, index) => {
        return (
          <div>
            <VideoCard
              video={video} // current video that we want to display
              videos={sortedData} // current video that
              setVideos={props.setVideos} // useState set function
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCards;
