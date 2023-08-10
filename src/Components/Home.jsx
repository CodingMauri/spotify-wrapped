import React from "react";
import { Route,  Routes} from "react-router-dom";
import Login from "../Authentication/Login";
import Callback from "../Authentication/CallBack";
export default function Home() {

  const code = new URLSearchParams(window.location.search).get('code')
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#132454] ">
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
