import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import videoData from "./video_data/exampleresponse.json";
// import VideoCards from "./VideoCards.jsx";
// video data get node
const NewVideoCard = ({onAdd}) => {
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");
  //      id: 100 + Math.random() * 200, mathfloor 
  const addHandler = (event) => {
    event.preventDefault();
    console.log(newVideoURL);
    console.log(newVideoTitle);
    const new_entry = {
      id: 100 + Math.random() * 200,
      url: newVideoURL,
      title: newVideoTitle,
      rating: 0,
    };
    onAdd(new_entry);
    // videoData.push(new_entry);
    // VideoCards.setList(videoData);
  };

  // const addHandler = (event) => {
  //   // event.target.value
  //   event.preventDefault();
  //   console.log(newVideoURL);
  //   console.log(newVideoTitle);
  //   alert("You clicked me");
  //   videoData.push(newVideoURL);
  //   // Todo post url node
  // };

  return (
    <Form className="addNewVideoForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Youtube video</Form.Label>
        <Form.Control
          onChange={(event) => setNewVideoURL(event.target.value)}
          type="text"
          placeholder="Submit the URL of the Youtube video"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Video Title</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setNewVideoTitle(event.target.value)}
          placeholder="Enter the title of the video"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={addHandler}>
        Submit
      </Button>
    </Form>
  );
};

export default NewVideoCard;
