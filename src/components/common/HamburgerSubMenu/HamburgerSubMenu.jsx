import React from "react";
import PropTypes from "prop-types";
import { MainColorBtn } from "../Buttons/MainColorBtn/MainColorBtn";
import { icons } from "../../../images/index";

import styles from "./HamburgerSubMenu.module.scss";

export const HamburgerSubMenu = ({ data, buttons, activeButton, onHide }) => {
  const handleToggle = () => {
    onHide();
  };

  const renderActiveButtonsContent = (button) => {
    const { subjects, img, abstract, linkTo } = data[button];
    return (
      <div key={`${subjects}-${button}`}>
        <div className={styles.abstractWrap}>
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
    );
  };

  const activeContent = buttons
    .filter((buttn) => activeButton === buttn)
    .map(renderActiveButtonsContent);

  return <div className={`${styles.sideOpenMenu}`}>{activeContent}</div>;
};

HamburgerSubMenu.propTypes = {
  data: PropTypes.object.isRequired,
  activeButton: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string),
};
