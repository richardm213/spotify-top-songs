require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

app.get("/login", (req, res) => {
  const scopes = require("./scopes");
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  const auth = await spotifyApi.authorizationCodeGrant(code);
  spotifyApi.setAccessToken(auth.body.access_token);
  spotifyApi.setRefreshToken(auth.body.refresh_token);
  const expires_in = auth.body.expires_in;
  setInterval(async () => {
    const data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body.access_token);
    console.log("New access_token:", spotifyApi.getAccessToken());
  }, (expires_in * 1000) / 6);
  res.redirect("http://localhost:3000/?login=true");
});

app.use("/top/:time_range/:offset", async (req, res) => {
  const timeRange = req.params.time_range;
  const limit = 50;
  const offset = req.params.offset;
  const topTracks = await spotifyApi.getMyTopTracks({
    time_range: timeRange,
    limit: limit,
    offset: offset,
  });
  res.json(topTracks);
});

app.listen(port, console.log("Visit http://localhost:" + port + "/login"));
