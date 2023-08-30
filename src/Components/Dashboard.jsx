import { useState, useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import ScrollFeatures from "./ScrollFeatures";
export default function Dashboard({ code }) {
  //All pieces of state used to store data
  const [topArtists, setTopArtists] = useState([]);
  const [firstArtist, setFirstArtist] = useState("");
  const [artistImages, setArtistImages] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [gallery, setGallery] = useState([]);

  const client = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SECRET_KEY;

  // Array that holds all the titles of the features of the app.
  // This will allow me to map through the features for the ui design

  // destructuring what i will be using to make request
  const spotifyApi = new SpotifyWebApi({
    clientId: client,
  });
  const accessToken = useAuth(code);

  //Function to get Random Artist images
  function getRandomIndices(max, count) {
    const indices = []; //intializing empty array indices to store

    /* While the length of indices is less than count:
    Generate a random number between 0 and max - 1 and assign it to randomIndex
        
    If randomIndex is not already in indices:
        Add randomIndex to the indices array*/

    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
  //Start of Spotify Api calls
  const getMyTopArtists = () => {
    spotifyApi
      .getMyTopArtists({ limit: 10 })
      .then((response) => {
        const topArtistsData = response.body.items;

        //going to grab 3 pictures of random from user top artist data
        const randomIndices = getRandomIndices(topArtistsData.length, 3);

        const randomImages = randomIndices.map(
          (index) => topArtistsData[index]
        );

        const artistNames = topArtistsData.map((artist) => artist.name);

        const firstArtistImage = topArtistsData.find(
          (artist) => artist.images.length > 0
        );
        setGallery(randomImages);
        setTopArtists(artistNames);
        setFirstArtist(artistNames[0]);
        setArtistImages(firstArtistImage.images[1].url);
      })
      .catch((error) => {
        console.error("Error fetching top artists", error);
      });
  };
  console.log(gallery)
  const getTopTracksOfTheMonth = () => {
    const currentDate = new Date();
    const lastMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    // const timeRange = {
    //   from: lastMonthDate.toISOString(),
    //   to: currentDate.toISOString(),

    // }
    spotifyApi
      .getMyTopTracks({ limit: 10, time_range: "short_term" })
      .then((response) => {
        const topTracksData = response.body.items;
        const topTracksNames = topTracksData.map((tracks) => tracks.name);

        setTopTracks(topTracksNames);
      })
      .catch((err) => console.log(err));
  };

  //Rendering all request in

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    getMyTopArtists();
    getTopTracksOfTheMonth();
  }, [accessToken]);

  return (
    <div className="flex bg-[#000] ">
      {/* <NavBar /> */}
      <ScrollFeatures
        topArtists={topArtists}
        artistImages={artistImages}
        firstArtist={firstArtist}
        gallery = {gallery}
      />
    </div>
  );
}
