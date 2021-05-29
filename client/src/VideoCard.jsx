import React, { useEffect, useState } from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (video, videos, setVideos) => {
  const date = Date(Date.now());
  const currentDate = date.toString();

  function removeVideo(event) {
    console.log("removeVideo", video.video.id);
    fetch(`http://127.0.0.1:5000/${video.video.id}`, {
      method: "DELETE",
    });
     //TODO: Need to remove video card from client (browser) display
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
