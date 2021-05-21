import React from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (props) => {
  console.log("props", props.video)
  function handleClick(e) {
    e.preventDefault();
    const videoId = props.video.id;
    props.deleteHandler(videoId);
  }
  const date = Date(Date.now());
  const currentDate = date.toString(); 

  return (
    <Card style={{ width: "18rem" }} id={props.video.id}>
      <Card.Title> {props.video.title}</Card.Title>
      <iframe
        width="560"
        height="315"
        src={props.video.url.replace("watch?v=", "embed/")}
        title={props.video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
      
        <p>{`Upload date: ${currentDate}`} </p>
      </div>
      <Card.Body>
        <ButtonGroup className="mr-2" aria-label="First group">
          <CounterButtons rating={props.video.rating} />
          <Button variant="danger" onClick={handleClick}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};
export default VideoCard;
