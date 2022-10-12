import React, { useState, useCallback } from "react";
import Popup from "../Popup";
import TrackGrid from "../TrackGrid";
import TrackDetails from "../TrackDetails";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./style.css";

const TopTracks = () => {
  const accessToken = useAuth();
  const [popupClicked, setPopupClicked] = useState(false);
  const getTopTracks = useCallback((accessToken, timeRange) => {
    return axios
      .post(`http://localhost:8888/top/${timeRange}/0`, { accessToken })
      .then((data) => {
        return data.data.body.items;
      });
  }, []);
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
        <TrackGrid
          accessToken={accessToken}
          spotifyRequest={getTopTracks}
          setCurrTrack={setCurrTrack}
        />
        <TrackDetails id="track-details" currTrack={currTrack} />
      </div>
    </div>
  );
};

export default TopTracks;
