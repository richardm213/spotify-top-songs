import React from "react";
import "./style.css";

const Track = (props) => {
  const audio = new Audio(props.preview);
  const handleMouseOver = () => {
    props.setCurrTrack({
      albumName: props.albumName,
      songName: props.songName,
      albumCover: props.albumCover,
      artistName: props.artistName,
    });
    audio.currentTime = 0;
    audio.play();
  };
  const handleMouseLeave = () => {
    props.setCurrTrack({
      songName: "",
      albumCover: require("../../assets/default.png"),
      albumName: "",
      artistName: "",
    });
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
