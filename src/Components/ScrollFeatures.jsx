import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureTitle } from "./Features/Title";
export default function ScrollFeatures({
  topArtists,
  artistImages,
  firstArtist,
  features,
}) {
  console.log(features);
  return (
    <section className="mx-auto max-w-6xl px-4 ">
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh] ">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className=" aspect-square w-full bg-gray-100 ">
            div col
          </div>
        </div>
      </div>
    </section>
  );
}
