import React, { useState } from "react";
import Popup from "../Popup";
import TrackGrid from "../TrackGrid";
import TrackDetails from "../TrackDetails";
import useAuth from "../../hooks/useAuth";
import "./style.css";

const TopTracks = () => {
  const accessToken = useAuth();
  const [popupClicked, setPopupClicked] = useState(false);
  const [currTrack, setCurrTrack] = useState({
    songName: "",
    albumCover: require("../../assets/default.png"),
    albumName: "",
    artistName: "",
  });

  return (
    <div>
      {!popupClicked && <Popup setClicked={setPopupClicked} />}
      <div id="top-tracks">
        <TrackGrid accessToken={accessToken} setCurrTrack={setCurrTrack} />
        <TrackDetails id="track-details" currTrack={currTrack} />
      </div>
    </div>
  );
};

export default TopTracks;
