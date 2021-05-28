import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import VideoCards from "./VideoCards.jsx";
import NewVideoCard from "./NewVideoCard";
import videoData from "./video_data/exampleresponse.json";

function App() {
  const [videos, setVideos] = useState([]);

  function onAdd(newVideo) {
    setVideos([...videos, newVideo]);
  }
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error("There is an error with the service");
        }
      })
      .then((data) =>
        video.setVideos(data).catch((error) => setError(error.message))
      );
  }, []);

  function removeVideo(videoId) {
    const newList = videos.find((item) => item.id !== videoId);
    setVideos(newList);
    // console.log("VID", videoId);
    // POST request using fetch()
    const id = newList.id;
    fetch(`http://127.0.0.1:5000/${id}`, {
      // Adding method type
      method: "DELETE",

      // Adding body or contents to send
      body: JSON.stringify({
        id: id,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((json) => console.log(json))
      .catch((e) => console.log(e));
  }

  return (
    <div className="App">
      
      <Header />
      <NewVideoCard onAdd={onAdd} />
      <VideoCards
        videos={videos}
        removeVideo={removeVideo}
        setVideos={setVideos} // use state spl
      />
    </div>
  );
}

export default App;
