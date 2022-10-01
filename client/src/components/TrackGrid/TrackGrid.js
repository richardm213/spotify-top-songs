import React, { useState, memo } from "react";
import useTrackData from "../../hooks/useTrackData";
import "./style.css";

const TrackGrid = (props) => {
  const [timeRange, setTimeRange] = useState("short_term");
  const trackData = useTrackData(
    props.accessToken,
    timeRange,
    props.setCurrTrack
  );

  const handleTimeRange = (e) => {
    setTimeRange(e.target.value);
  };

  return (
    <div id="track-grid">
      <h1 id="tracks-header">Your Top Tracks</h1>
      <div id="time_range">
        <select value={timeRange} onChange={handleTimeRange}>
          <option value="short_term">Past month</option>
          <option value="medium_term">Past 6 months</option>
          <option value="long_term">All time</option>
        </select>
      </div>
      <div id="tracks">{trackData}</div>
    </div>
  );
};

export default memo(TrackGrid);
