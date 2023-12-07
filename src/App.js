import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Redirect } from "./coponents/views/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect redirectUrl={"home"} />} />
      <Route path="/smartqube" element={<Redirect redirectUrl={"home"} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
