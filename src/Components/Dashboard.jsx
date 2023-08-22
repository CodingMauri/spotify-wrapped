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
        console.log(topArtistsData);
        const artistNames = topArtistsData.map((artist) => artist.name);
        setTopArtists(artistNames);
      })
      .catch((error) => {
        console.error("Error fetching top artists", error);
      });
  };

  console.log(topArtists);

  return (
    <div className="flex flex-col w-full h-full bg-[#2E4053] ">
      <div className="w-2/3 h-[200px]   m-auto rounded-lg bg-white">
        <div className="w-1/2 h-full items-center p-4 bg-red-100 ">
          <h1 className=" font-billionstar capitalize ">Your Top Arxtist!</h1>
        </div>
      </div>
      <div>
        {topArtists.map((artist, index) => (
          <div className="flex justify-center w-2/3 h-full"></div>
        ))}
      </div>
    </div>
  );
}
