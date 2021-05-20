import "./App.css";
import React, { useState } from "react";
import Header from "./Header.jsx";
import VideoCards from "./VideoCards.jsx";
import NewVideoCard from "./NewVideoCard";
import videoData from "./video_data/exampleresponse.json";
const dayjs = require("dayjs");

const currentDate = dayjs();
console.log(currentDate.toString());

function App() {
  const [videos, setVideos] = useState(videoData);

  function onAdd(newVideo) {
    setVideos([...videos, newVideo]);
  }

  function removeVideo(videoId) {
    const newList = videos.filter((item) => item.id !== videoId);
    setVideos(newList);
    console.log("VID", videoId);
    // videoData.find(videoId).splice(-1);
  }
  
  return (
    <div className="App">
      <Header />
      {/* {videos.length} */}
      {/* <header className="App-header">
        <h1>Video Recommendation</h1>
      </header> */}
      <NewVideoCard onAdd={onAdd} />
      <VideoCards videos={videos} removeVideo={removeVideo} />
    </div>
  );
}

export default App;
