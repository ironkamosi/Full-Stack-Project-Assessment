import React from "react";
import VideoCard from "./VideoCard.jsx";
import videoData from "./video_data/exampleresponse.json";

const VideoCards = () => {
  function removeVideo(videoId) {
    console.log("VID", videoId)
    videoData.find(videoId).splice(-1);
  }
  return (
    <div>
      {videoData.map((video, index) => {
        console.log("vcds", video);
        return (
          <VideoCard deleteHandler={removeVideo} key={index} video={video} />
        );
      })}
    </div>
  );
};

export default VideoCards;
