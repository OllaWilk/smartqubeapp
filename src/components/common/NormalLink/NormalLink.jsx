import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NormalLink.module.scss";

export const NormalLink = ({ name, to, onClick }) => {
  return (
    <NavLink to={to} onClick={onClick} className={styles.link}>
      {name}
    </NavLink>
  );
};

NormalLink.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
