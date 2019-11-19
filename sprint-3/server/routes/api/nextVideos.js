const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fileName =
  "/Users/samuelimpey/Documents/BrainStation/samuel-impey-brainflix/sprint-3/server/models/nextvideos.json";
const nextVideos = require(fileName);
const fileName1 =
  "/Users/samuelimpey/Documents/BrainStation/samuel-impey-brainflix/sprint-3/server/models/videos.json";
const currentVideos = require(fileName1);
const app = express();
const helper = require("../../helper/helper");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json(nextVideos);
});

router.get("/:id", (req, res) => {
  const found = currentVideos.some(video => video.id === req.params.id);
  if (found) {
    res.json(currentVideos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(currentVideos),
    title: req.body.title,
    channel: "My Channel",
    image: req.body.image,
    description: req.body.description,
    views: "293,123",
    likes: "324",
    durration: "4:01",
    timestamp: new Date(),
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };

  const newSide = {
    id: newVideo.id,
    title: newVideo.title,
    channel: newVideo.channel,
    image: req.body.image
  };

  currentVideos.push(newVideo);
  nextVideos.push(newSide);
  helper.writeJSONFile(fileName, nextVideos);
  res.json(nextVideos);
  helper.writeJSONFile(fileName1, currentVideos);
  res.json(currentVideos);
});

module.exports = router;
