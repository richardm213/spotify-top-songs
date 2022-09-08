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

app.listen(port, console.log("Visit http://localhost:" + port + "/login"));
