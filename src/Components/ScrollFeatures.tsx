import React, { useState } from "react";
import { motion, AnimatePresence, useAnimate} from "framer-motion";
import { FeatureTitle } from "./Features/Title";
import { TopArtist, TopTracks } from "./Features/FeatureCard";
import { useFeatureStore } from "./Features/store";

type RandomImagesProps = {
  gallery: Artist[];
}
type Artist = {
  images: {url: string}[]
}
export default function ScrollFeatures({gallery}:RandomImagesProps) {
  console.log(gallery)
  const topArtistImages = gallery.map((artist) => artist.images[0].url)
  const features = [
    {
      title: "Your top artist right now is...",
      id: "TopArtist",
      card: TopArtist,
      artistImages: topArtistImages,
      gallery:gallery,
    },
    {
      title: "Your favorite tracks this month were...",
      id: "TopTracks",
      card: TopTracks,
    },
    {
      title: "Your top genre this month was",
      id: "TopGenre",
      card: TopArtist,
    },
  ];

  const [scope, animate] = useAnimate();

  // const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature

  return (
    <section className="mx-auto max-w-6xl px-4 ">
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]" ref = {scope}>
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className=" relative bg-gray-100 aspect-square w-full rounded-xl">
            {features.map((feature) => (
              <feature.card gallery = {gallery} artistImages={topArtistImages} id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
