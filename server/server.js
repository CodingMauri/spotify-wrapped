const express = require("express");

const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json()); //Parrsing through json request


app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: '055b41e8385a4c449be13bccfe31ce54',
    clientSecret: '6b760836f7334743b9d0269e37eb4969',
    refreshToken,
  });
  spotifyApi
    .refreshToken()
    .then(data => 
        {
      console.log(data.body);

      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch((err) => console.log(err));
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: "055b41e8385a4c449be13bccfe31ce54",
    clientSecret: "6b760836f7334743b9d0269e37eb4969",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });

      
    })


    .catch((error) => console.error("Error during token exchange", error))
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
