import React from "react";
import useTrackData from "../../hooks/useTrackData";
import "./style.css";

const TrackGrid = () => {
  const trackData = useTrackData();
  return <div id="track-grid">{trackData}</div>;
};

export default TrackGrid;
