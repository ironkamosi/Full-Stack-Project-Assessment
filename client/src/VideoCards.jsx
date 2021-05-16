import React from "react";
// import NewVideoCard from "./NewVideoCard"
import VideoCard from "./VideoCard.jsx";

const VideoCards = ({videos, removeVideo}) => {
  return (
    <div>
      {videos.map((video) => {
        return (
          <VideoCard deleteHandler={removeVideo} key={video.id} video={video} />
        );
      })}
    </div>
  );
};

export default VideoCards;
