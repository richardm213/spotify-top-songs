import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    if (accessToken) return;
    setAccessToken(
      new URLSearchParams(window.location.search).get("accessToken")
    );
    setRefreshToken(
      new URLSearchParams(window.location.search).get("refreshToken")
    );
    setExpiresIn(new URLSearchParams(window.location.search).get("expiresIn"));
  }, [accessToken]);

  useEffect(() => {
    if (!refreshToken) return;
    const i = setInterval(() => {
      axios
        .post(process.env.REACT_APP_SERVER_BASE_URL + "/refresh", {
          refreshToken,
        })
        .then((data) => {
          setAccessToken(data.accessToken);
        });
    }, (expiresIn / 6) * 1000);
    return () => clearInterval(i);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
