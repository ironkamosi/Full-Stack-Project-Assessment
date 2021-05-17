import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// video data get node
const NewVideoCard = ({ onAdd }) => {
  const [newVideoURL, setNewVideoURL] = useState("");
  const [newVideoTitle, setNewVideoTitle] = useState("");
  //      id: 100 + Math.random() * 200, mathfloor
  const addHandler = (event) => {
    event.preventDefault();

    console.log(newVideoURL);
    console.log(newVideoTitle);
    const new_entry = {
      id: 100 + Math.random() * 200, // fix the id
      url: newVideoURL,
      title: newVideoTitle,
      rating: 0,
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
