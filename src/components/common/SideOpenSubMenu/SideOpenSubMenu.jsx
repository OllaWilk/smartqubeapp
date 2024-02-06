import React from "react";
import PropTypes from "prop-types";

import styles from "./SideOpenSubMenu.module.scss";
import { MainColorBtn } from "../Buttons/MainColorBtn/MainColorBtn";

export const SideOpenSubMenu = ({ data, onHide }) => {
  const { abstract, linkTo } = data;

  const handleToggle = () => {
    onHide();
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.sideOpenMenu}`}>
        <h4 className={styles.headerName}>{abstract}</h4>
        <div></div>
        <div className={styles.btnWrap} onClick={handleToggle}>
          <MainColorBtn text={linkTo[0]} linkTo={linkTo[1]} />
        </div>
      </div>
    </div>
  );
};

SideOpenSubMenu.propTypes = {
  data: PropTypes.object,
  onHide: PropTypes.func,
};
