import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../../../utils/useToggle";
import { SideOpenSubMenu } from "../index";
import styles from "./Dropdown.module.scss";
import { solutionsNav } from "../../../db/en/navigation";

export const Dropdown = ({
  index,
  buttonLabel,
  subItems,
  expanded,
  toggleExpand,
}) => {
  const [value, toggle] = useToggle(true);
  const [selectedSubItem, setSelectedSubItem] = useState(subItems[0]);
  const [selectedData, setSelectedData] = useState(solutionsNav[0]);

  const displaySubItem = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const handleToggle = (subItem) => {
    toggle(!value);
    displaySubItem(subItem);

    const data = solutionsNav.find((item) => item.name === subItem);

    if (data) {
      setSelectedData(data);
    }
  };

  return (
    <div key={`stringBtn-${index}`} className={styles.navigationList}>
      <p onClick={toggleExpand} className={styles.topNavlink}>
        {buttonLabel}
      </p>
      {expanded && (
        <ul className={`${styles.dropList} `}>
          {subItems.map((subItem, subIndex) => (
            <li
              key={`dropdownBtnNav-${subItem}`}
              className={`${styles.expandedLink} ${
                subItem === selectedSubItem ? styles.selectedItem : ""
              }`}
              onClick={() => handleToggle(subItem)}
            >
              {subItem}
            </li>
          ))}
          {selectedSubItem && (
            <SideOpenSubMenu data={selectedData} onHide={toggleExpand} />
          )}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  index: PropTypes.number,
  buttonLabel: PropTypes.string,
  subItems: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func,
};
