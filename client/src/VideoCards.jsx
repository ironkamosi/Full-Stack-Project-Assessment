import React from "react";
import VideoCard from "./VideoCard.jsx";

function compare(videoOne, videoTwo) {
  //descending top to bottom
  // This helps put the array in order
  if (videoOne.rating > videoTwo.rating) {
    return -1;
  }
  if (videoOne.rating < videoTwo.rating) {
    return 1;
  }
  return 0;
}

const VideoCards = (props) => {
  // console.log("videoC's", props)
  // const sortedData = props.videos.sort(compare);
  // let toggleData = props.videos.sort((a, b) => a.rating - b.rating); // comparing two objects
  // console.log("pv", props.videos)
  
  // const [sortedData, setSortedData] = useState(props.videos) // the data is intialised with the videos array
 let sortedData = props.videos
  
  return (
    <div>
      <button className="toggle-btn" onClick={() => {
       sortedData = props.videos.sort((a, b) => a.rating - b.rating);
      } // the function will not get excuted when the compoent is intialised

      }>
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
