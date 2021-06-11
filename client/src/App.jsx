import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import VideoCards from "./VideoCards.jsx";
import NewVideoCard from "./NewVideoCard";

function App() {
  const [videos, setVideos] = useState([]);

  function onAdd(newVideo) {
    setVideos([...videos, newVideo]);
  }

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
    <div className="App">
      <Header />
      <NewVideoCard onAdd={onAdd} />
      <VideoCards
        videos={videos}
        setVideos={setVideos} 
      />{" "}
    </div>
  );
}

export default App;
