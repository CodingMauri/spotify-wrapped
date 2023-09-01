import classNames from "classnames";
import React from "react";
import { useFeatureStore } from "./store";

type Props = {
  id: string;
};
type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children ,id}: VisualProps) => {

  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature)
  return (
    <div className={classNames("fixed inset-0 flex items-center justify-center",
    fullscreenFeature === id  ? "opacity-100" : "opacity-0 pointer-events-none")}>
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const TopArtistVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img
        src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aecf4604-1d3b-417f-97c6-d5be80f51eb9/3.jpg"
        alt=" img"
      ></img>
    </Visual>
  );
};
export const TopTracktVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img
        src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/aecf4604-1d3b-417f-97c6-d5be80f51eb9/3.jpg"
        alt=" img"
      ></img>
    </Visual>
  );
};
