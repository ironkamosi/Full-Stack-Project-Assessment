import React, { useEffect, useState } from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (video, videos, setVideos) => {
  const date = Date(Date.now());
  const currentDate = date.toString();

  function removeVideo(event) {
    const videoId = event.target.getAttribute("videoid");
    console.log("vid", videoId);
    const newList = video.videos.find((item) => item.id !== videoId);

    const id = newList.id;

  const [status, setStatus] = useState(null);

  useEffect(() => {
    // DELETE request using fetch inside useEffect React hook
    fetch(`http://127.0.0.1:5000/${id}`, {
      method: "DELETE",
    }).then(() => setStatus("Delete successful"));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
    
    
    
    
// useEffect(() => {
//   // DELETE request using fetch inside useEffect React hook
//   fetch(`http://127.0.0.1:5000/${id}`, {
//     method: "DELETE",
//   }).then(() => console.log("de"));

//   // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);















    // fetch(`http://127.0.0.1:5000/523523`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: null,
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) =>
    //     // this is the data we get after putting our data, do whatever you want with this data
    //     console.log(data)
        
    //   );

    // fetch(`http://127.0.0.1:5000/${id}`, {
    //   // Adding method type
    //   method: "DELETE",

    //   // Adding body or contents to send
    //   body: null,

    //   // Adding headers to the request
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   // Converting to JSON
    //   .then((response) => response)
    //   // Displaying results to console
    //   .then((json) => {
    //     if (json.status === 200) {
    //       const videoIndex = video.videos.findIndex(
    //         (video) => video.id === parseInt(videoId)
    //       );
    //       if (videoIndex >= 0) {
    //         // video.videos.splice(videoIndex, 1);
    //         video.setVideos(video.videos);
    //       }
    //     }
    //     return console.log("res stat", json.status);
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <div>
      <Card style={{ width: "18rem" }} id={video.video.id}>
        <Card.Title> {video.video.title}</Card.Title>
        <iframe
          width="560"
          height="315"
          src={video.video.url.replace("watch?v=", "embed/")}
          title={video.video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <p>{`Upload date: ${currentDate}`} </p>
        </div>
        <Card.Body>
          <ButtonGroup className="mr-2" aria-label="First group">
            <CounterButtons rating={video.video.rating} />
            <Button
              variant="danger"
              onClick={removeVideo}
              videoid={video.video.id}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      {/* <p></p>Status: {status} */}
    </div>
  );
};
export default VideoCard;
