import React from "react";
import { Route,  Routes} from "react-router-dom";
import Login from "../Authentication/Login";
import NavBar from "./NavBar";
export default function Home() {

  return (
    <div className="w-full h-screen bg-[#f7f0ff]  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
