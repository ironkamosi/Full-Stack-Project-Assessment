import React from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (props) => {
  function deleteHandler(e) {
    e.preventDefault();
    const videoId = e.target.parentNode.parentNode.parentNode.id;

    props.deleteHandler(videoId);
  }
  return (
    <Card style={{ width: "18rem" }} id={props.video.id}>
      <Card.Title> {props.video.title}</Card.Title>
      <iframe
        width="560"
        height="315"
        src={props.video.url.replace("watch?v=", "embed/")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <Card.Body>
        <ButtonGroup className="mr-2" aria-label="First group">
          <CounterButtons />
          <Button onClick={deleteHandler}>Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
export default VideoCard;
