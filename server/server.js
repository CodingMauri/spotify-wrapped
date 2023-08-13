const express = require("express");

const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv")

dotenv.config();

app.use(cors());
app.use(express.json()); //Parrsing through json request
app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SECRET_KEY,
  });
  
  spotifyApi
  .authorizationCodeGrant(code)
  .then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  })
  
  .catch((error) => console.error("Error during token exchange", error))
});



app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
