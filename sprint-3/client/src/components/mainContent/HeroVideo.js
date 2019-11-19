import React from "react";

export default function HeroVideo({ current }) {
  return (
    <div className="video-player">
      <video
        className="video-player__video"
        poster={current.image}
        controls
      ></video>
    </div>
  );
}
