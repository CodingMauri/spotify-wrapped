import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopArtist({ topArtists, artistImages, firstArtist}) {
  const [reveal, setReveal] = useState(false);

  const handleClick = () => {
    setReveal(!reveal);
  };

  return (
    <>
      <motion.div
        className="w-full h-screen mx-auto rounded-lg"
        transition={{ duration: 0.5 }}
      >
        <div
          className="grid grid-cols-2 gap-2 w-full h-full items-center p-4"
          onClick={handleClick}
        >
          <>
          
          <div className="">
              <h1 className=" bolded font-komikax ">Your Top Artist Was ...</h1>
            </div>
            <div className="p-1">LOGO</div>
          </>

          {reveal ? (
            <>
              <img className = " rounded-lg shadow-lg" src={artistImages} alt={artistImages} />


              {topArtists.map((artist, index) => (
                
                <>
                  <h3 className="font-komikax" key={index}>
                    {index + 1} {artist}
                  </h3>
                  
                </>
              ))}
            </>
          ) : null}
        </div>
      </motion.div>
      <div></div>
    </>
  );
}
