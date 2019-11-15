const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");
const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/videos", require("./routes/api/nextVideos"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
