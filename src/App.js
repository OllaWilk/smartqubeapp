import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  Redirect,
  NotFound,
  Technical,
  Contact,
  Footer,
  Navigation,
  Coolingsolutions,
  Integration,
  Services,
} from "./components/views/index";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/smartqube" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coolingsolutions" element={<Coolingsolutions />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
