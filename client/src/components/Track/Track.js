import React from "react";
import "./style.css";

const Track = (props) => {
  const audio = new Audio(props.preview);
  const handleMouseOver = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const handleMouseLeave = () => {
    audio.pause();
  };
  return (
    <div className="track">
      <img
        src={props.albumCover}
        alt={props.albumName}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Track;
