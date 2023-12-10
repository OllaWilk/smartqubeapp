import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Home, Redirect, NotFound } from "./coponents/views/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect redirectUrl={"home"} />} />
      <Route path="/smartqube" element={<Redirect redirectUrl={"home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
