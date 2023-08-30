import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureTitle } from "./Features/Title";
import { TopArtist, TopTracks } from "./Features/FeatureCard";

type RandomImagesProps = {
  gallery:string;
}
export default function ScrollFeatures({gallery}:RandomImagesProps) {
  const features = [
    {
      title: "Your top artist right now is...",
      id: "TopArtist",
      card: TopArtist,
      gallery:gallery
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

  return (
    <section className="mx-auto max-w-6xl px-4 ">
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh] ">
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
              <feature.card   id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
