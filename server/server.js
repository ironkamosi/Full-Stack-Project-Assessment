const express = require("express");
const { Pool } = require("pg"); // postgres
const app = express();
const cors = require("cors");
const youTubeData = require("./exampleresponse.json");
app.use(express.json()); // middleware
app.use(cors());

// read videoData
app.get("/", (req, res) => {
  res.json(youTubeData);
});

// read video by id
app.get("/:id", (req, res) => {
  const findVideoId = youTubeData.find(
    (video) => video.id === parseInt(req.params.id)
  );
  if (findVideoId) {
    res.send(findVideoId);
  } else {
    res.status(404); // Not found
    res.send({ message: "no video exist" });
  }
});

// Write
app.post("/", (req, res) => {
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
});

app.delete("/:id", (req, res) => {
  console.log("rpi", req.params.id);

  try {
    const videoIndex = youTubeData.findIndex(
      (video) => video.id === parseInt(req.params.id)
    );
    if (videoIndex >= 0) {
      // fix
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

const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
