import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Authentication/Login";
import Callback from "../Authentication/Callback"
export default function Home() {
  return (
    <div className="landing-page">
      
        <Route path="/callback" component={Callback} />
        <Route path="/" component={Login} />
      
    </div>
  );
}
