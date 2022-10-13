import React, { useState, useEffect, memo } from "react";
import useTrackData from "../../hooks/useTrackData";
import "./style.css";

const TrackGrid = (props) => {
  const [timeRange, setTimeRange] = useState("short_term");
  const trackData = useTrackData(
    props.accessToken,
    props.spotifyRequest,
    timeRange,
    props.setCurrTrack
  );

  useEffect(() => {
    document.getElementById("time_range").children[0].style.color =
      "var(--time-range-selected)";
  }, []);

  const handleTimeRange = (e) => {
    setTimeRange(e.target.getAttribute("value"));
    const a = document.getElementById("time_range").children;
    for (let i = 0; i < 3; ++i) a[i].style.color = "var(--time-range-primary)";
    e.target.style.color = "var(--time-range-selected)";
  };

  return (
    <div id="track-grid">
      <h1 id="tracks-header">Your Top Tracks</h1>
      <div id="time_range">
        <span value="short_term" onClick={handleTimeRange}>
          Past month
        </span>
        <span value="medium_term" onClick={handleTimeRange}>
          Past 6 months
        </span>
        <span value="long_term" onClick={handleTimeRange}>
          All time
        </span>
      </div>
      <div id="tracks">{trackData}</div>
    </div>
  );
};

export default memo(TrackGrid);
