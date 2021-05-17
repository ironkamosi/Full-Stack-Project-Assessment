import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  };
 
  return (
    <form onSubmit={addHandler}>
      <div>
        <label>Youtube video</label>
        <input
          onChange={(event) => setNewVideoTitle(event.target.value)}
          type="text"
          placeholder="Enter the title of your Youtubevideo"
          required
        />

        <input
          onChange={(event) => setNewVideoURL(event.target.value)}
          type="text"
          placeholder="Submit the URL of the Youtube video"
          required
        />

        <button variant="primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewVideoCard;
