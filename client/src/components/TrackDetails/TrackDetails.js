import React from "react";
import "./style.css";

const TrackDetails = (props) => {
  return (
    <div id="track-details">
      {props.currTrack && (
        <img
          id="album-cover"
          src={props.currTrack.albumCover}
          alt={props.currTrack.albumName}
        />
      )}
      <div id="song-name">{props.currTrack.songName}</div>
      <div id="artist-name">{props.currTrack.artistName}</div>
    </div>
  );
};

export default TrackDetails;
