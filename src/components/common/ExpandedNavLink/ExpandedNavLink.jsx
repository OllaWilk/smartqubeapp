import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigationNavbar } from "../../../db/en/navigation";
import { NormalLink, Dropdown } from "../index";
import { useToggle } from "../../../utils/useToggle";

export const ExpandedNavLink = ({ item, index }) => {
  const [value, toggle] = useToggle(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleToggle = (index) => {
    setExpandedItem((prev) => (prev === index ? null : index));
    toggle(!value);
  };

  if (typeof item == "string") {
    return (
      <NormalLink
        name={item}
        to={`/${navigationNavbar[index].toLowerCase()}`}
        onClick={handleScrollToTop}
      />
    );
  } else if (typeof item === "object") {
    const buttonLabel = Object.keys(item)[0];
    const subItems = item[buttonLabel];
    return (
      <Dropdown
        index={index}
        buttonLabel={buttonLabel}
        subItems={subItems}
        expanded={expandedItem === index}
        toggleExpand={() => {
          handleScrollToTop();
          handleToggle(index);
        }}
      />
    );
  }

  return null;
};

ExpandedNavLink.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
};
