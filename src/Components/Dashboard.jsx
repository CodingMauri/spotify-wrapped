import { useState, useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import Month from "./Month";
import { motion } from "framer-motion";
import TopArtist from "./TopArtist";
import NavBar from "./NavBar";
export default function Dashboard({ code }) {
  const [topArtists, setTopArtists] = useState([]);
  const [firstArtist,setFirstArtist] = useState("")
  const [artistImages,setArtistImages] = useState("")
  const [topTracks,setTopTracks] = useState([])

  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SECRET_KEY;

  const spotifyApi = new SpotifyWebApi({
    clientId: client,
  });
  const accessToken = useAuth(code);

 

  //Using spotifyWebApi to request top Artist
  const getMyTopArtists = () => {
    // if(!loggedIn){
    //   return;
    // }
    spotifyApi
      .getMyTopArtists({ limit: 10 })
      .then((response) => {

        console.log(response)
        
        const topArtistsData = response.body.items;
        const artistNames = topArtistsData.map((artist) => artist.name); 
        

        //This will allow me to only get the first artist image so that i can display it

        const firstArtistImage = topArtistsData.find(
          (artist) => artist.images.length > 0
          
        )


      
        setTopArtists(artistNames);
        setFirstArtist(artistNames[0])
        setArtistImages(firstArtistImage.images[1].url)
      })
      .catch((error) => {
        console.error("Error fetching top artists", error);
      });


      
      
  };
  
  const getTopTracksOfTheMonth = () => {
    const currentDate = new Date();
    const lastMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1, 1
    )
  // const timeRange = {
  //   from: lastMonthDate.toISOString(),
  //   to: currentDate.toISOString(),

  // }
  spotifyApi
  .getMyTopTracks({limit:10,time_range:"short_term"})
  .then((response) => {
    const topTracksData = response.body.items;
    console.log(topTracksData)
    const topTracksNames = topTracksData.map((tracks) => tracks.name)

    setTopTracks(topTracksNames)
  })
  .catch((err) => console.log(err))
  
  }
  

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    getMyTopArtists()
    getTopTracksOfTheMonth()
  }, [accessToken]);
  

  console.log(topTracks, "I am top tracks")

  
  return (
    <div className="  w-full h-full bg-[#2E4053] ">
      <NavBar />
      <TopArtist topArtists = {topArtists} artistImages = {artistImages} firstArtist = {firstArtist}/>
      <Month topTracks = {topTracks}/>
    </div>
  );
}
