import "./App.css";
import React, { useState } from "react";
import Header from "./Header.jsx";
import VideoCards from "./VideoCards.jsx";
import NewVideoCard from "./NewVideoCard";
import videoData from "./video_data/exampleresponse.json";

function App() {
  const [videos, setVideos] = useState(videoData);

  function onAdd(newVideo) {
    setVideos([...videos, newVideo]);
  }

  function removeVideo(videoId) {
    const newList = videos.filter((item) => item.id !== videoId);
    setVideos(newList);
    console.log("VID", videoId);
  }

  return (
    <div className="App">
      <Header />

      <NewVideoCard onAdd={onAdd} />
      <VideoCards videos={videos} removeVideo={removeVideo} />
    </div>
  );
}

export default App;
