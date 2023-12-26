import { useState, useEffect } from "react";

export const useScrollFadeIn = () => {
  const [visible, setVisible] = useState({
    header: false,
    aboutUs: false,
    offer: false,
    callToAction: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setVisible((prev) => ({
        header: scrollY + windowHeight * 1 > 0,
        aboutUs: scrollY + windowHeight * 0.6 > windowHeight,
        offer: scrollY + windowHeight * 0.6 > windowHeight * 2,
        callToAction: scrollY + windowHeight * 0.6 > windowHeight * 3,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getStyle = (section) => ({
    opacity: visible[section] ? 1 : 0,
    transition: "opacity 0.75s cubic-bezier(0.71, 0.01, 0.24, 0.99)",
  });

  return getStyle;
};
