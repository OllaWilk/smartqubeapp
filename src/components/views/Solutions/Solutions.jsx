import React, { useState } from "react";
import { solutions } from "../../../db/en/solutions";
import styles from "./Solutions.module.scss";
import { Carousel } from "../../common";

export const Solutions = () => {
  const { carousel } = solutions;
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={`container`}>
          <Carousel carousel={carousel} />
        </div>
      </div>
    </>
  );
};
