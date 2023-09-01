import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";
import { useFeatureStore } from "./store";
type Props = {
  children: React.ReactNode;
  id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });


  const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    //setinviewelement

    if (isInView) setInViewFeature(id);
    if(!isInView && inViewFeature === id) setInViewFeature(null)
  }, [isInView, id, setInViewFeature,inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "py-16 font-komikax text-3xl transition-colors ",
        isInView ? "text-white" : "text-[#242424]"
      )}
    >
      {children}
    </p>
  );
};