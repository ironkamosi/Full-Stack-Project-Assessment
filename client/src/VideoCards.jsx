import React,{useState} from "react";
import VideoCard from "./VideoCard.jsx";



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

const VideoCards = (props) => {
  const [toggle,setToggle]= useState()
  
  // POST request using fetch()
    fetch(`http://127.0.0.1:5000`, {
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





  // console.log("videoC's", props)
  // const sortedData = props.videos.sort(compare);
  // let toggleData = props.videos.sort((a, b) => a.rating - b.rating); // comparing two objects
  // console.log("pv", props.videos)
  
  // const [sortedData, setSortedData] = useState(props.videos) // the data is intialised with the videos array
//  let sortedData = props.videos
  
  return (
    <div>
      <button className="toggle-btn" onClick={}>
        Toggle Ratings
      </button>
      {console.log(sortedData)}

      {sortedData.map((video, index) => {
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
