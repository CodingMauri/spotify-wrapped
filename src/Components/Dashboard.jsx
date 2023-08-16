import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
export default function Dashboard({ code }) {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SECRET_KEY;

  const spotifyApi = new SpotifyWebApi({
    clientId: client
  })
  const accessToken = useAuth(code);


  useEffect(() => {
    if(!accessToken) return
    spotifyApi.setAccessToken(accessToken)

  },[accessToken])

  useEffect(() => {
    spotifyApi.searchTracks(search).then((res) => console.log(res.body));
  })
  

  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col w-full h-100vh bg-white ">
      {code}

      <form
        className=" flex w-full h-[100px]] bg-[#141414] cursor-pointer border-2"
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <input type="text" placeholder="Search a song " />
      </form>
    </div>
  );
}
