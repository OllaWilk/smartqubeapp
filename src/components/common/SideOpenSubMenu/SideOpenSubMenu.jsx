import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MainColorBtn } from "../Buttons/MainColorBtn/MainColorBtn";
import { icons } from "../../../images/index";

import styles from "./SideOpenSubMenu.module.scss";

export const SideOpenSubMenu = ({ data, onHide }) => {
  const { img, abstract, linkTo, subjects } = data;
  useEffect(() => {}, [subjects]);
  const handleToggle = () => {
    onHide();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}></div>
      <div className={`${styles.sideOpenMenu}`}>
        <div className={styles.abstractWrap}>
          <img src={icons.close} alt={"close"} onClick={handleToggle} />
          <div className={styles.imgAbstract}>
            {img && <img src={img} alt={"logo"} />}
            <h4 className={styles.headerName}>{abstract}</h4>
          </div>
        </div>

        {subjects && (
          <div className={styles.megaWrap}>
            {subjects.map((subject, index) => (
              <div
                key={`${subject.name}-${index}`}
                className={styles.megaCartWrap}
              >
                <p className={styles.mainTitle}>{subject.name}</p>
                <ul>
                  {subject.btnsList.map((el) => (
                    <li key={`${el}`} className={styles.listItems}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
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
