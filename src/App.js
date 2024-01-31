import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LocaleContext } from "./contexts/LocaleContext";
import { loadLanguage } from "./utils/loadLanguage";
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
  const { language, region } = useContext(LocaleContext);
  const data = loadLanguage(language);

  return (
    <>
      <Navigation navigationNavbar={data.navigationNavbar} />

      <Routes>
        <Route path="/" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/smartqube" element={<Redirect redirectUrl={"home"} />} />
        <Route path="/home" element={<Home home={data.home} />} />
        <Route
          path={`/about`}
          element={<About about={data.about} region={region} />}
        />
        <Route
          path="/coolingsolutions"
          element={
            <Coolingsolutions coolingSolutions={data.coolingSolutions} />
          }
        />
        <Route
          path="/integration"
          element={<Integration integration={data.integration} />}
        />
        <Route
          path="/services"
          element={<Services services={data.services} />}
        />
        <Route
          path="/privacy"
          element={<Technical technical={data.technical} />}
        />
        <Route
          path="/contact"
          element={<Contact contact={data.contact} region={region} />}
        />
        <Route path="*" element={<NotFound notFound={data.notFound} />} />
      </Routes>

      <Footer
        footer={data.footer}
        navigationNavbar={data.navigationNavbar}
        region={region}
      />
    </>
  );
};
