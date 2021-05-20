import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const dayjs = require("dayjs");

const timeStamp = dayjs();
const date = timeStamp.toString();

// video data get node
const NewVideoCard = ({ onAdd }) => {
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");

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
    onAdd(new_entry);
  };

  return (
    <form onSubmit={addHandler}>
      <div className="form group">
        <label for="YouTube video Tile">YouTube video Title</label>
        <input
          onChange={(event) => setNewVideoTitle(event.target.value)}
          type="text"
          placeholder="Enter the title of your YouTube video"
          required
        />
        <label for="YouTube URL"> YouTube URL</label>
        <input
          onChange={(event) => setNewVideoURL(event.target.value)}
          type="text"
          pattern="https://www.youtube.com/.*"
          placeholder="Submit the URL of the YouTube video"
          required
        />

        <button type="submit" class="btn btn-secondary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewVideoCard;
