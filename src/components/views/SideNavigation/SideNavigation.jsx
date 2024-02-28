import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigationNavbar } from "../../../db/en/navigation";
import { useToggle } from "../../../utils/useToggle";
import { DropdownHamburger, NormalLink } from "../../common";

export const SideNavigation = ({
  item,
  index,
  solutionsNav,
  integrationNav,
}) => {
  const [value, toggle] = useToggle(true);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    window.scrollTo(0, 0);
    setExpandedItem((prev) => (prev === index ? null : index));
    toggle(!value);
  };

  const renderNavItem = (item, index) => {
    if (typeof item === "string") {
      return (
        <NormalLink
          name={item}
          to={`/${navigationNavbar[index].toLowerCase()}`}
          onClick={handleToggle}
        />
      );
    } else if (typeof item === "object") {
      const buttonLabel = Object.keys(item)[0];
      const subItems = item[buttonLabel];

      return (
        <DropdownHamburger
          solutionsNav={solutionsNav}
          integrationNav={integrationNav}
          index={index}
          buttonLabel={buttonLabel}
          subItems={subItems}
          expanded={expandedItem === index}
          toggleExpand={() => {
            window.scrollTo(0, 0);
            handleToggle(index);
          }}
        />
      );
    }
    return null;
  };

  return <> {renderNavItem(item, index)} </>;
};

SideNavigation.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  index: PropTypes.number,
  solutionsNav: PropTypes.object,
  integrationNav: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
