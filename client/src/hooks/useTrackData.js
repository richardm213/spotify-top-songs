import React, { useState, useEffect } from "react";
import Track from "../components/Track";
import { v4 as uuidv4 } from "uuid";

const useTrackData = (accessToken, spotifyRequest, timeRange, setCurrTrack) => {
  const [trackData, setTrackData] = useState([]);
  useEffect(() => {
    (async () => {
      if (!accessToken) return;
      const tracks = await spotifyRequest(accessToken, timeRange);
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
            key={uuidv4()}
            albumCover={albumCover}
            albumName={albumName}
            preview={preview}
            songName={songName}
            artistName={artistName}
            setCurrTrack={setCurrTrack}
          />,
        ]);
      }
    })();
  }, [accessToken, spotifyRequest, timeRange, setCurrTrack]);
  return trackData;
};

export default useTrackData;
