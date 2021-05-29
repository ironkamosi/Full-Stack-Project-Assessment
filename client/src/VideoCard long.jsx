import React from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (video, videos, setVideos) => {
  const date = Date(Date.now());
  const currentDate = date.toString();

 
  function removeVideo(event) {
    const videoId = video.video.id
    console.log("vid", videoId);
   
      
  fetch(`http://127.0.0.1:5000/${videoId}`, {
  	method: 'DELETE',
  	headers: {
    'Content-Type': 'application/json'
  	},
  	body: null //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
		})  
  	//Converting to JSON
    .then((response) => response)
       // Displaying results to console
    .then((json) => {
         if (json.status === 200) {
           const videoIndex = video.videos.findIndex(
             (video) => video.id === parseInt(videoId)
           );
           if (videoIndex >= 0) {
              video.videos.splice(videoIndex, 1);
             video.setVideos(video.videos);
           }
         }
        return console.log("res stat", json.status);
      })
    .catch((error) => console.log(error));
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
    </div>
  );
};
export default VideoCard;
