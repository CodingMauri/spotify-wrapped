import { useState, useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
export default function Dashboard({code}) {
  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  console.log(client)
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
    getUserProfile()
  })

  const getUserProfile = () => {

    spotifyApi.getMe()
      .then((data) => {
        console.log("Trying to get user profile",data.body)
      })
      .catch((err) => {
          console.log("sumn fucked up")
      })

    }

 
    console.log(getUserProfile)

  return (
    <div className="flex flex-col w-full h-100vh bg-white ">
      {code}

      
    </div>
  );
}
