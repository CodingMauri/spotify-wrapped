import { useState, useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import { motion } from "framer-motion";
import TopArtist from "./TopArtist";
export default function Dashboard({ code }) {
  const [topArtists, setTopArtists] = useState([]);
  const [artistImages,setArtistImages] = useState("")
  const [frontCard, setFrontCard] = useState(true);
  const [flipped, setFlipped] = useState(false);
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

  //Using spotifyWebApi to request top Artist
  const getMyTopArtists = () => {
    // if(!loggedIn){
    //   return;
    // }
    spotifyApi
      .getMyTopArtists({ limit: 10 })
      .then((response) => {
        const topArtistsData = response.body.items;
        const artistNames = topArtistsData.map((artist) => artist.name);
        const  artistPhoto  = topArtistsData.map((image) => image.images)
        console.log(artistPhoto)
        setTopArtists(artistNames);
        setArtistImages(artistPhoto);
      })
      .catch((error) => {
        console.error("Error fetching top artists", error);
      });
  };

  const handleFlip = () => {
    setFlipped(!flipped);
    setFrontCard(!frontCard);
  };

  return (
    <div className=" p-10 w-full h-full bg-[#2E4053] ">
      <TopArtist topArtists = {topArtists} artistImages = {artistImages}/>
    </div>
  );
}
