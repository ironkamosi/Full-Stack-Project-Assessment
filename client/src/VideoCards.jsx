import React,{useState, useEffect} from "react";
import VideoCard from "./VideoCard.jsx";

const VideoCards = () => {
  const [toggle, setToggle] = useState();
  const [videos, setVideos] = useState([]);



  useEffect(() => {
    fetch("https://youtube-videos-db.herokuapp.com/")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("There is an error with the service");
        }
      })
      .then((data) => setVideos(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <button>Toggle Ratings</button>
      {videos.map((video, index) => {
        return (
          <div>
            <VideoCard
              video={video} // current video that we want to display
              // videos={sortedData} // current video that
              // setVideos={props.setVideos} // useState set function
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCards;
