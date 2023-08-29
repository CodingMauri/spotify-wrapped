import React from "react";
import { getAuthorizationURL } from "../apiConfig";
import Dashboard from "../Components/Dashboard";
import {motion} from "framer-motion"
export default function Login() {
  const handleLogin = () => {
    const authUrl = getAuthorizationURL();

    window.location.href = authUrl;
  };

  const code = new URLSearchParams(window.location.search).get("code");
  console.log(code)

  return (
    <>
      {code ? (
        <Dashboard code={code} />
      ) : (
        <motion.div
        initial = {{scale:0}}
        animate = {{rotate:360, scale:1}}
        transition = {{
          duration:1,
          type:"spring",
          stiffness: 80,
          damping:15
        }} className = "flex flex-col w-full h-full justify-center items-center bg-[#2E4053]">
          <h1 className = "m-10 font-bold  text-white font-billionstar drop-shadow-xl lg:text-5xl sm:text-md">RhythmicRecap</h1>

          <motion.button
          
            className=" flex bg-green-400 rounded-md p-2 text-white  font-bold cursor-pointer shadow-2xl font-komikax tracking-wider pb-3 drop-shadow-2xl"
            onClick={handleLogin}
            whileHover = {{scale:1.2,duration:1.2, transition:{
              ease:'linear',
              duration:0.5,
            }}}
          >
            Login with Spotify
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
