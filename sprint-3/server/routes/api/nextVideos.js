const express = require("express");
const router = express.Router();
const fileName =
  "/Users/samuelimpey/Documents/BrainStation/samuel-impey-brainflix/sprint-3/server/models/nextvideos.json";
let nextVideos = require(fileName);
const helper = require("../../helper/helper");

router.get("/", (req, res) => {
  res.json(nextVideos);
});

router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  const found = nextVideos.some(video => video.id === req.params.id);
  if (found) {
    res.json(students.filter(student => student.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Student with ID:${req.params.id} not found` });
  }
});
