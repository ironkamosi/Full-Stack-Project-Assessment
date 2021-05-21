import React from "react";
import VideoCard from "./VideoCard.jsx";

function compare(videoOne, videoTwo) {
  // This helps put the array in order
  if (videoOne.rating > videoTwo.rating) {
    return -1;
  }
  if (videoOne.rating < videoTwo.rating) {
    return 1;
  }
  return 0;
}

const VideoCards = ({ videos, removeVideo }) => {
  const sortedData = videos.sort(compare);
  return (
    <div>
      {sortedData.map((videos, index) => {
        return (
          <VideoCard deleteHandler={removeVideo} key={index} video={videos} />
        );
      })}
    </div>
  );
};

export default VideoCards;
