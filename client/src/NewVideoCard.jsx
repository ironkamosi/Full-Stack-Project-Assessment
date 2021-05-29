import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dayjs = require("dayjs");
const timeStamp = dayjs();
const date = timeStamp.toString();

// video data get node
const NewVideoCard = ({ onAdd }) => {
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");

  //http://127.0.0.1/5000
  //http://127.0.0.1:5000/
  //http://localhost:5000/


  const addHandler = (event) => {
    event.preventDefault();
    console.log(newVideoURL);
    console.log(newVideoTitle);

    const new_entry = {
      id: 0,
      url: newVideoURL.replace("watch?v=", "embed/"),
      title: newVideoTitle,
      rating: 0,
      date: date,
    };

    // POST request using fetch()
    fetch(`http://127.0.0.1:5000`, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(new_entry),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      // Displaying results to console
      .then((json) => {
        console.log(json);
        //right here: first time we know the ID for the video
        onAdd(json);
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={addHandler}>
      <div className="form group">
        <label htmlFor="YouTube video Tile">YouTube video Title</label>
        <input
          onChange={(event) => setNewVideoTitle(event.target.value)}
          type="text"
          placeholder="Enter the title of your YouTube video"
          required
        />
        <label htmlFor="YouTube URL"> YouTube URL</label>
        <input
          onChange={(event) => setNewVideoURL(event.target.value)}
          type="text"
          pattern="https://www.youtube.com/.*"
          placeholder="Submit the URL of the YouTube video"
          required
        />

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewVideoCard;
