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
//  const [videos, setVideos] = useState(videoData);

//   function onAdd(newVideo) {
//     setVideos([...videos, newVideo]);
//   }
// remove when this function works

  // function removeVideo(videoId) {
  //   const newList = videos.find((item) => item.id !== videoId);
  //   setVideos(newList);
  //   // console.log("VID", videoId);
  //   // POST request using fetch()

  //  const id = newList.id
  //   fetch(`http://127.0.0.1:5000/${id}`, {
  //     // Adding method type
  //     method: "DELETE",

  //     // Adding body or contents to send
  //     body: JSON.stringify({
  //     id:id
  //     }),

  //     // Adding headers to the request
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     // Converting to JSON
  //     .then((response) => response.json())
  //     // Displaying results to console
  //     .then((json) => console.log(json))
  //     .catch((e) => console.log(e));
  // }
const VideoCards = (props) => {
  console.log("videoC's", props)
  const sortedData = props.videos.sort(compare);
  return (
    <div>
      {sortedData.map((video, index) => {
        return (
          <VideoCard
            video={video} // current video that we want to display
            videos={sortedData} // current video that 
            setVideos={props.setVideos} // useState set function 
            key={index}
          />
        );
      })}
    </div>
  );
};

export default VideoCards;
