import React, { useState, useEffect } from "react";
import Track from "../components/Track";
import axios from "axios";

const getTopTracks = () => {
  return axios.get("http://localhost:8888/top/short_term/0").then((data) => {
    return data.data.body.items;
  });
};

const useTrackData = () => {
  const [trackData, setTrackData] = useState([]);
  useEffect(() => {
    (async () => {
      const tracks = await getTopTracks();
      setTrackData([]);
      for (let i = 0; i < tracks.length; ++i) {
        const albumCover = tracks[i].album.images[2].url;
        const albumName = tracks[i].album.name;
        const preview = tracks[i].preview_url;
        setTrackData((prevTrackData) => [
          ...prevTrackData,
          <Track
            albumCover={albumCover}
            albumName={albumName}
            preview={preview}
          />,
        ]);
      }
    })();
  }, []);
  return trackData;
};

export default useTrackData;
