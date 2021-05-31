const express = require("express");
const { Pool } = require("pg"); // postgres
const app = express();
const cors = require("cors");
const youTubeData = require("./exampleresponse.json");
app.use(express.json()); // middleware
app.use(cors());

// read videoData
app.get("/", (req, res) => {
  try {
    res.json(youTubeData);
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Error at the server video data could not be fetched ",
    });
  }
});

// read video by id
app.get("/:id", (req, res) => {
  try {
    const findVideoId = youTubeData.find(
      (video) => video.id === parseInt(req.params.id)
    );
    if (findVideoId) {
      res.send(findVideoId);
    } else {
      res.status(404); // Not found
      res.send({ message: "no video exist" });
    }
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Error at the server video id could not be fetched ",
    });
    data;
  }
});

// Read data - sort in descending order
const descendingData = youTubeData.sort((a, b) => b.rating - a.rating);
app.get("/?order=desc", (req, res) => {
  try {
    res.send(descendingData);
    res.status(200);
    res.json({
      message: "success",
      result: "video data was sorted in a descending order",
    });
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Error video data could not be sorted ",
    });
  }
});

// Read data - sort in ascending order
const ascendingData = youTubeData.sort((b, a) => a.rating - b.rating);
app.get("/?order=asc", (req, res) => {
  try {
    res.send(ascendingData);
    res.status(200);
    res.json({
      message: "success",
      result: "video data was sorted in a ascending order",
    });
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Error video data could not be sorted ",
    });
  }
});

// Write
app.post("/", (req, res) => {
  try {
    const newVideo = req.body;
    if (
      !newVideo.title ||
      !newVideo.url ||
      !newVideo.url.includes("youtube.com")
    ) {
      res.status(400); // Bad request
      res.send({
        result: "failure",
        message: "Video could not be saved, please check the url or title",
      });
    } else if (
      youTubeData.find(
        (video) => video.title === newVideo.title && video.url === newVideo.url
      )
    ) {
      res.status(400); // Bad request
      res.send({
        message: "YouTube video already exists, check the url and title!",
      });
    } else {
      const id = Math.floor(Math.random(0, 1) * 1000000);
      youTubeData.push({ ...newVideo, id: id });
      res.status(201); // Created
      res.send({ ...newVideo, id: id });
    }
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Error at the server new video data could not be created ",
    });
  }
});

// delete
app.delete("/:id", (req, res) => {
  try {
    const videoIndex = youTubeData.findIndex(
      (video) => video.id === parseInt(req.params.id)
    );
    if (videoIndex >= 0) {
      youTubeData.splice(videoIndex, 1);
    }
    return res.status(200).json({
      result: "successful",
      message: "Video was deleted",
    });
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Video could not be deleted",
    });
  }
});

// Update
app.put("/:id", (req, res) => {
  try {
    const clientId = req.params.id;
    const videoRating = req.body.rating;
    const videoIndex = youTubeData.findIndex(
      (video) => video.id === parseInt(clientId)
    );
    if (videoIndex >= 0) {
      const foundVideo = youTubeData[videoIndex]; // selecting the video
      foundVideo.rating = videoRating;
      console.log(`videoRating${videoRating}`);
    }
    return res
      .status(200)
      .json({ result: "success", message: "Video rating has been updated" });
  } catch {
    res.status(500).json({
      result: "failure",
      message: "Video could not updated",
    });
  }
});

const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
