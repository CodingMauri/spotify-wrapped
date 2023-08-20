import { useState, useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
export default function Dashboard({ code }) {
  const [topArtists, setTopArtists] = useState([]);
  const [loggedIn, setLoggedIn] = useState();
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SECRET_KEY;

  const spotifyApi = new SpotifyWebApi({
    clientId: client,
  });
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    getMyTopArtists();
  }, [accessToken]);

  const getMyTopArtists = () => {
    // if(!loggedIn){
    //   return;
    // }
    spotifyApi
    .getMyTopArtists({ limit: 10 })
    .then((response) => {
      const topArtistsData = response.body.items;
      const artistNames = topArtistsData.map((artist) => artist.name);
      setTopArtists(artistNames);
    })
    .catch((error) => {
      console.error("Error fetching top artists", error);
    });
  }

  return (
    <div className="flex flex-col w-full h-100vh bg-white ">
      <div>
        {topArtists.map((artist,index) =>(
          <li key ={index}>{artist}</li>
        ))}
      </div>
    </div>
  );
}
