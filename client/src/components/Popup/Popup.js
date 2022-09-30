import React from "react";
import "./style.css";

const Popup = (props) => {
  const handleClick = () => {
    props.setClicked(true);
  };

  return (
    <div id="popup">
      <div id="popup-center-box">
        <h2 id="popup-header">Welcome to Spotify Top Songs!</h2>
        <img
          id="music"
          src={require("../../assets/music.png")}
          alt="Music logo"
        />
        <div id="reminder">Reminder: this site plays music</div>
        <img
          id="cursor"
          src={require("../../assets/cursor.png")}
          alt="Hover cursor"
        />
        <div id="listen">
          <b>Hover</b> to listen to tracks
        </div>
        <button id="popup-button" onClick={handleClick}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Popup;
