import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loogin from "../pages/Loogin";
import Registration from "../pages/Register";
import Home from "../pages/Home"

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Loogin />}></Route>
        <Route path={"/register"} element={<Registration />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterApp;
