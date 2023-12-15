import React from "react";
import PropTypes, { string } from "prop-types";
import styles from "./PdfListDisplay.module.scss";

export const PdfListDisplay = ({ activeList, data, allSeriesKeys }) => {
  const renderList = (list) => {
    return list.map((item, index) => (
      <li key={index}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </li>
    ));
  };

  return (
    <div className={styles.pdfListWrap}>
      {allSeriesKeys.map(
        (item) =>
          activeList === item && (
            <ul key={`${activeList}-active-list`} className={styles.pdfList}>
              {renderList(data[item])}
            </ul>
          )
      )}
    </div>
  );
};

PdfListDisplay.propTypes = {
  activeList: PropTypes.string,
  allSeriesKeys: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    )
  ),
};
