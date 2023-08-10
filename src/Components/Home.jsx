import React from "react";
import { Route, Switch, Routes} from "react-router-dom";
import Login from "../Authentication/Login";
import Callback from "../Authentication/CallBack";
export default function Home() {
  return (
    <div className="landing-page">
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
