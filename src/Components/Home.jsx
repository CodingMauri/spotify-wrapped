import React from "react";
import { Route,  Routes} from "react-router-dom";
import Login from "../Authentication/Login";
export default function Home() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#132454] ">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
