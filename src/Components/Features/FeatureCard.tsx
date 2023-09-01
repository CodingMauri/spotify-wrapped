import React from "react";
import classNames from "classnames";
import { useFeatureStore } from "./store";


type FeatureCardProps = {
  gradient: string;
  children : React.ReactNode;

} & CardProps ;


type CardProps = {
  id:string;
}

type Artist = {
  id: string;
  name: string;
  images: {url: string}[]

};
 const FeatureCard = ({ gradient, children , id}: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)
  const setFullscreenFeature = useFeatureStore((state) => state.setFullscreenFeature)

  const handleTransition = () => {
    setFullscreenFeature(id)
  }

  console.log(handleTransition)
  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100": "opacity-0"
      )}
    >
      {children}
      <button onClick = {handleTransition} className = " font-overpass absolute bg-black text-white bottom-6 right-6 rounded-xl px-4 py-2">
        Show Me
      </button>
    </div>
  );

  


};
export const TopArtist = ({id,gallery,artistImages,}:CardProps & {gallery: Artist[], artistImages:string[]}) => {

  return (
   <FeatureCard id = {id}  gradient = "from-[#f7f0ff] to-[#a78afe]" >
      <img className = "absolute left-[10%] top-[10%] w-[20%] rounded-xl shadow-lg" src = {artistImages[0]} alt  = "img" />
      <img className = "absolute left-[70%] top-[20%] w-[25%] rounded-xl shadow-lg" src = {artistImages[1]} alt  = "img" />
      <img className = "absolute left-[20%] top-[60%] w-[30%] rounded-xl shadow-lg" src = {artistImages[2]} alt  = "img" />

   </FeatureCard>
  );

  


};
export const TopTracks = ({id}:CardProps) => {
  return (
    <FeatureCard id = {id}  gradient = "from-[#f5fbff] to-[#addeff]">
    \

   </FeatureCard>
  );

  


};
