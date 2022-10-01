require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8888;
const SpotifyWebApi = require("spotify-web-api-node");

app.get("/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });
  const scopes = require("./scopes");
  try {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
  } catch (err) {
    res.sendStatus(err.statusCode);
  }
});

app.get("/callback", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });
  const code = req.query.code;
  try {
    const auth = await spotifyApi.authorizationCodeGrant(code);
    res.redirect(
      "http://localhost:3000/?login=true" +
        "&accessToken=" +
        auth.body.access_token +
        "&expiresIn=" +
        auth.body.expires_in +
        "&refreshToken=" +
        auth.body.refresh_token
    );
  } catch (err) {
    res.sendStatus(err.statusCode);
  }
});

app.post("/refresh", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken: req.body.refreshToken,
  });
  try {
    const tokens = await spotifyApi.refreshAccessToken();
    console.log("New access token: " + tokens.body.access_token);
    res.json({ accessToken: tokens.body.access_token });
  } catch (err) {
    res.sendStatus(err.statusCode);
  }
});

app.post("/top/:time_range/:offset", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  });
  spotifyApi.setAccessToken(req.body.accessToken);
  const timeRange = req.params.time_range;
  const limit = 50;
  const offset = req.params.offset;
  try {
    const topTracks = await spotifyApi.getMyTopTracks({
      time_range: timeRange,
      limit: limit,
      offset: offset,
    });
    res.json(topTracks);
  } catch (err) {
    res.sendStatus(err.statusCode);
  }
});

app.listen(port, console.log("Visit http://localhost:" + port + "/login"));
