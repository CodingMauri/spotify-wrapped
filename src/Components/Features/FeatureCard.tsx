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
 const FeatureCard = ({ gradient, children , id}: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature)

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100": "opacity-0"
      )}
    >
      {children}
    </div>
  );

  


};
export const TopArtist = ({id}:CardProps) => {
  return (
   <FeatureCard id = {id}  gradient = "from-[#f7f0ff] to-[#a78afe]">
    <span />
   </FeatureCard>
  );

  


};
export const TopTracks = ({id}:CardProps) => {
  return (
    <FeatureCard id = {id}  gradient = "from-[#f5fbff] to-[#addeff]">
    <span />
   </FeatureCard>
  );

  


};
