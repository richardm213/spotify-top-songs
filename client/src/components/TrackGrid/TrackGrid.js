import React, { useState } from "react";
import useTrackData from "../../hooks/useTrackData";
import "./style.css";

const TrackGrid = () => {
  const [timeRange, setTimeRange] = useState("short_term");
  const trackData = useTrackData(timeRange);

  const handleTimeRange = (e) => {
    setTimeRange(e.target.value);
  };

  return (
    <div id="track-grid">
      <div id="time_range">
        <select value={timeRange} onChange={handleTimeRange}>
          <option value="short_term">Past month</option>
          <option value="medium_term">Past 6 months</option>
          <option value="long_term">All time</option>
        </select>
      </div>
      {trackData}
    </div>
  );
};

export default TrackGrid;
