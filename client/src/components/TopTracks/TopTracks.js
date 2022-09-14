import React, { useState } from "react";
import TrackGrid from "../TrackGrid";
import TrackDetails from "../TrackDetails";
import "./style.css";

const TopTracks = () => {
  const [currTrack, setCurrTrack] = useState({
    songName: "",
    albumCover: require("../../assets/default.png"),
    albumName: "",
    artistName: "",
  });

  return (
    <div id="top-tracks">
      <TrackGrid setCurrTrack={setCurrTrack} />
      <TrackDetails id="track-details" currTrack={currTrack} />
    </div>
  );
};

export default TopTracks;
