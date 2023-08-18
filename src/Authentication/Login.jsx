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
        <div className="inline-flex gap-3 w-full h-full justify-center items-center">
          <h1 className=" font-bold text-lg ">Your Spotify Wrapped !</h1>

          <button
            className="bg-green-400 rounded-md p-2 text-white [text-shadow:] font-bold cursor-pointer "
            onClick={handleLogin}
          >
            Login with Spotify
          </button>
        </div>
      )}
    </>
  );
}
