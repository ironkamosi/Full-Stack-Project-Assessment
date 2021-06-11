require("dotenv").config();
const express = require("express");
const { Pool } = require("pg"); // postgres
const app = express();

const cors = require("cors");
const pool = new Pool();

app.use(express.json()); // middleware
app.use(cors());

//-------------------------HEROKU-------------------------
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

//-------------------UTILITY FUNCTIONS-------------------
function UrlStringValidator(string, characterLength) {
  const regexp =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  if (string.length > characterLength) {
    return false;
  }
  if (typeof string !== "string" && !(string instanceof String)) {
    return false;
  }
  if (!string.match(regexp)) {
    return false;
  }
  return true;
}

function isValidID(id) {
  return !isNaN(id) && id >= 0;
}

//-----------------------ENDPOINTS-----------------------

// get video data in ascending and descending order
app.get("/", async (req, res) => {
  const selectQuery = `SELECT * FROM videos ORDER BY rating`;
  const sortOrderOfVideos = req.query.order;
  try {
    let result = [];
    if (sortOrderOfVideos === "asc") {
      result = await pool.query(selectQuery);
    } else {
      result = await pool.query(`${selectQuery} DESC`);
    }
    res.status(200).send(result.rows);
  } catch (error) {
    res.status(500).send(error);
  }
});

// read video by id
app.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    res.status(400).send({
      result: `FAILURE`,
      message: `ALERT: Bad id provided: ${id}`,
    });
    return;
  }

  pool
    .query(`SELECT * FROM videos WHERE id= $1`, [id])
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({ message: "Internal Server Error" });
    });
});


// create video data
app.post("/", function (req, res) {
  const newVideoId = Math.floor(Math.random(0, 1) * 1000000);
  const newVideoTitle = req.body.title;
  const newVideoUrl = req.body.url;
  const newVideo = req.body;
  if (!newVideo.url.includes("youtube.com")) {
    res.status(400); // Bad request
    res.send({
      result: `FAILURE`,
      message: "Video could not be saved, please enter a valid YouTube url",
    });
  }

  if (newVideoUrl) {
    if (!UrlStringValidator(newVideoUrl, 150)) {
      res.status(400).send({
        result: `FAILURE`,
        message: `Invalid url ${newVideoUrl} there is a limit of 50 characters or your url does not contain a valid YouTube url`,
      });
      return;
    }
  }

  pool
    .query("SELECT * FROM videos WHERE title=$1", [newVideoTitle])
    .then((result) => {
      if (result.rows.length > 0) {
        return res.status(400).send({
          result: `FAILURE`,
          message: `A video with the same title ${newVideoTitle} already exists!`,
        });
      }
    });

  pool
    .query("SELECT * FROM videos WHERE url=$1", [newVideoUrl])
    .then((result) => {
      if (result.rowCount > 0) {
        return res.status(400).send({
          result: `FAILURE`,
          message: `A video with the same url ${newVideoUrl} already exists!`,
        });
      }
    });

  pool
    .query("SELECT * FROM videos WHERE title=$1 AND url=$2", [
      newVideoTitle,
      newVideoUrl,
    ])
    .then((result) => {
      if (result.rows.length > 0) {
        return res.status(400).send({
          result: `FAILURE`,
          message: `A video with the same title ${newVideoTitle} and url ${newVideoUrl} already exists!`,
        });
      } else {
        const query = "INSERT INTO videos (id, title, url) VALUES ($1, $2, $3)";
        pool
          .query(query, [newVideoId, newVideoTitle, newVideoUrl])
          .then(() =>
            res.send({
              result: `SUCCESS`,
              message: `A new video has been created in the database`,
            })
          )
          .catch((e) => {
            console.error(e.stack);
            res.status(500).send({
              result: `FAILURE`,
              message: `FATAL ERROR: Internal Server Error`,
            });
          });
      }
    });
});

//delete video by id
app.delete("/:id", function (req, res) {
  const videoId = parseInt(req.params.id);

  if (!isValidID(videoId)) {
    res.status(404).send();
    return;
  }
  pool
    .query("DELETE FROM videos WHERE id=$1", [videoId])
    .then(() => {
      pool
        .query("DELETE FROM videos WHERE id=$1", [videoId])
        .then(() =>
          res.status(200).send({
            result: `SUCCESS`,
            message: `YouTube video ${videoId} has been deleted!`,
          })
        )
        .catch((e) => console.error(e));
    })
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({
        result: `FAILURE`,
        message: `FATAL ERROR: Internal Server Error`,
      });
    });
});

// Update
// app.put("/:id", (req, res) => {
//   try {
//     const clientId = req.params.id;
//     const videoRating = req.body.rating;
//     const videoIndex = youTubeData.findIndex(
//       (video) => video.id === parseInt(clientId)
//     );
//     if (videoIndex >= 0) {
//       const foundVideo = youTubeData[videoIndex]; // selecting the video
//       foundVideo.rating = videoRating;
//       console.log(`videoRating${videoRating}`);
//     }
//     return res
//       .status(200)
//       .json({ result: "success", message: "Video rating has been updated" });
//   } catch {
//     res.status(500).json({
//       result: "failure",
//       message: "Video could not updated",
//     });
//   }
// });

// app.put("/:id", function (req, res) {
//   const clientId = parseInt(req.params.id);
//   const newVideoTitle = req.body.title;
//   const newVideoUrl = req.body.url;
//   const videoRating = parseInt(req.body.rating);
  
  
//   if (!isValidID(clientId)) {
//     res.status(404).send();
//     return;
//   }
//   // if (!Number.isInteger(videoRating)) {
//   //   return res.status(400).send({
//   //     result: "failure",
//   //     message: "Video rating must be an integer",
//   //   });
//   // }
//   pool
//     .query("UPDATE video SET rating=$1, title=$2, url=$3 WHERE id=$4", [
//       videoRating,
//       newVideoTitle,
//       newVideoUrl,
//       clientId
//     ])
//     .then((result) => {
//       if (result.rowCount === 0) {
//         return res
//           .status(400)
//           .send({
//             result: `FAILURE`,
//             message: `This video id does not exist please check your data!`,
//           });
//       } else {
//         res.send({
//           result: `SUCCESS`,
//           message: `Video rating ${videoRating} has been updated!`,
//         });
//       }
//     })
//     .catch((e) => {
//       console.error(e);
//       res.status(500).json({
//         result: "failure",
//         message: "Video could not updated",
//       });
//     });
// });

function ratingValidator(number) {
  if (typeof number !== number) {
    return parseInt(number)
  }
}



app.put("/:id", function (req, res) {
  // const clientId = parseInt(req.params.id);
  const {id,title,url,rating }= req.body
  parseInt(id)
  parseInt(rating)

  if (!isValidID(clientId)) {
    res.status(404).send();
    return;
  }

   
   if (!Number.isInteger(id) || id <= 0) {
     return res
       .status(400)
       .send({
         result: `FAILURE`,
         message: `Invalid video id ${id}, check your input data`
       });
  }
  
  pool
    .query("UPDATE videos SET rating=$1, id=$2, title=$3, url=$4 WHERE id=$5", [
      rating,
      id,
      title,
      url,
      id
    ])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.status(400).send({
          result: `FAILURE`,
          message: `This video id does not exist please check your data!`,
        });
      } else {
        res.send({
          result: `SUCCESS`,
          message: `Video rating ${rating} has been updated!`,
        });
      }
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({
        result: "failure",
        message: "Video could not updated",
      });
    });
});






const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
