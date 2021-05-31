import React, { useState } from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import CounterButtons from "./CounterButtons.jsx";

const VideoCard = (props) => {
  const date = Date(Date.now());
  const currentDate = date.toString();
  const [likeCounter, setLikeCounter] = useState(props.video.rating || 0);

  function removeVideo() {
    const id = props.video.id;
    fetch(`http://127.0.0.1:5000/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
    console.log("removeVideo", props.video.id);
    //TODO: Need to remove video card from client (browser) display
  }

  function updateRating(counterLikeValue) {
    const id = props.video.id;
    // PUT request using fetch()
    fetch(`http://127.0.0.1:5000/${id}`, {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({ rating: counterLikeValue }), // the like counter from counter buttons

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => {
        if (response.status === 200) {
          return setLikeCounter(counterLikeValue);
        }
      })
      // Displaying results to console
      // .then((json) => {
      //   console.log(json);
      //   //right here: first time we know the ID for the video

      // })
      .catch((e) => console.log(e));
  }

  return (
    <div>
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
            <CounterButtons
              onUpdateRating={updateRating}
              rating={likeCounter}
            />
            <Button
              variant="danger"
              onClick={removeVideo}
              videoid={props.video.id}
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
