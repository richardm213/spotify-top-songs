import React, { useState, useEffect } from "react";
import Track from "../components/Track";
import axios from "axios";

const getTopTracks = (timeRange) => {
  return axios.get(`http://localhost:8888/top/${timeRange}/0`).then((data) => {
    return data.data.body.items;
  });
};

const useTrackData = (timeRange) => {
  const [trackData, setTrackData] = useState([]);
  useEffect(() => {
    (async () => {
      const tracks = await getTopTracks(timeRange);
      setTrackData([]);
      for (let i = 0; i < tracks.length; ++i) {
        const albumCover = tracks[i].album.images[0].url;
        const albumName = tracks[i].album.name;
        const preview = tracks[i].preview_url;
        const songName = tracks[i].name;
        const artistName = tracks[i].artists[0].name;
        setTrackData((prevTrackData) => [
          ...prevTrackData,
          <Track
            albumCover={albumCover}
            albumName={albumName}
            preview={preview}
            songName={songName}
            artistName={artistName}
          />,
        ]);
      }
    })();
  }, [timeRange]);
  return trackData;
};

export default useTrackData;
