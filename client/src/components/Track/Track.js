import React from "react";
import "./style.css";

const Track = (props) => {
  const handleMouseOver = () => {
    props.setCurrTrack({
      albumName: props.albumName,
      songName: props.songName,
      albumCover: props.albumCover,
      artistName: props.artistName,
      preview: props.preview,
    });
  };
  const handleMouseLeave = () => {
    props.setCurrTrack({
      songName: "",
      albumCover: require("../../assets/default.png"),
      albumName: "",
      artistName: "",
      preview: "",
    });
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
