import React from "react";
import classNames from "classnames";
import { useFeatureStore } from "./store";


type FeatureCardProps = {
  gradient: string;
  children : React.ReactNode;

} & CardProps ;
type RandomImagesProps = {
  gallery: Artist[];
}
type CardProps = {
  id:string;
}

type Artist = {
  id: string;
  name: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
};
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
      <button className = " font-overpass absolute bg-black text-white bottom-6 right-6 rounded-xl px-4 py-2">
        Show Me
      </button>
    </div>
  );

  


};
export const TopArtist = ({id}:CardProps & {gallery: Artist[], artistImages:string[]}) => {
  return (
   <FeatureCard id = {id}  gradient = "from-[#f7f0ff] to-[#a78afe]" >
      <img className = "absolute left-[10%] top-[10%] w-[20%] rounded-xl shadow-lg" src = "https://mir-s3-cdn-cf.behance.net/project_modules/hd/602f4731226337.5646928c3633f.jpg"/>
      <img className = "absolute left-[70%] top-[20%] w-[25%] rounded-xl shadow-lg" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4mxbhjAhylUPED9JvE4mM53NkkfADZ9JNg&usqp=CAU"/>
      <img className = "absolute left-[20%] top-[60%] w-[30%] rounded-xl shadow-lg" src = "https://www.billboard.com/wp-content/uploads/2022/05/chance-the-rapper-acid-rap-billboard-1240-1.jpg?w=600"/>

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
