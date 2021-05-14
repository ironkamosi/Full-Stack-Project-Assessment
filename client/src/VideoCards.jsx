import React, { useState} from "react";
import VideoCard from "./VideoCard.jsx";
import videoData from "./video_data/exampleresponse.json";

const VideoCards = () => {
  const [list, setList] = useState(videoData);
  function removeVideo(videoId) {
    const newList = list.filter((item) => item.id !== videoId);

    setList(newList);
    console.log("VID", videoId)
    // videoData.find(videoId).splice(-1);
  }
  /*
2. you don't access the data by item.videoId, look at your data how do you access it in the loop
3. you are using state this means that you also need to use list in your return statement instead of videoData


*/

  return (
    <div>
      {list.map((video, index) => {
        // console.log("vcds", video);
        return (
          <VideoCard deleteHandler={removeVideo} key={index} video={video} />
        );
      })}
    </div>
  );
};

export default VideoCards;
