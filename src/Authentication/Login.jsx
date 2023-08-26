import React from "react";
import { getAuthorizationURL } from "../apiConfig";
import Dashboard from "../Components/Dashboard";
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
        <div className = "flex flex-col w-full h-full justify-center items-center bg-[#2E4053]">
          <h1 className = "m-10 font-bold  text-white font-billionstar drop-shadow-xl lg:text-5xl sm:text-md">RhythmicRecap</h1>

          <button
            className=" flex bg-green-400 rounded-md p-2 text-white  font-bold cursor-pointer shadow-2xl font-komikax tracking-wider pb-3 drop-shadow-2xl"
            onClick={handleLogin}
          >
            Login with Spotify
          </button>
        </div>
      )}
    </>
  );
}
