import React from "react";
import styles from "./ScrollBtn.module.scss";

export const ScrollBtn = () => {
  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section");

    const visibleSectionIndex = Array.from(sections).findIndex(
      (section) => section.getBoundingClientRect().top >= 0
    );

    console.log(visibleSectionIndex < sections.length - 1);
    if (visibleSectionIndex >= 0 && visibleSectionIndex < sections.length - 1) {
      console.log(sections.length);
      sections[visibleSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPreviousSection = () => {
    const sections = document.querySelectorAll("section");

    const visibleSectionIndex = Array.from(sections).findIndex(
      (section) => section.getBoundingClientRect().top >= 0
    );

    if (visibleSectionIndex > 0) {
      sections[visibleSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
    } else {
      sections[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.scrollButtons}>
      <div className={styles.prew} onClick={scrollToPreviousSection}>
        <span>&gt;</span>
      </div>
      <div className={styles.next} onClick={scrollToNextSection}>
        <span>&gt;</span>
      </div>
    </div>
  );
};
