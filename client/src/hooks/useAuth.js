import { useEffect, useState } from "react";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    if (accessToken) return;
    setAccessToken(
      new URLSearchParams(window.location.search).get("accessToken")
    );
  }, [accessToken]);

  return accessToken;
};

export default useAuth;
