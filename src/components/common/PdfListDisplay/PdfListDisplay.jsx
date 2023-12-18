import React from "react";
import PropTypes from "prop-types";
import styles from "./PdfListDisplay.module.scss";
import { icons } from "../../../images";

export const PdfListDisplay = ({ certificate, data, allSeriesKeys }) => {
  if (!certificate) {
    return (
      <div className={styles.certificateDetails}>
        Please select a certificate to view details.
      </div>
    );
  }

  return (
    <>
      {allSeriesKeys.map(
        (item) =>
          certificate === item && (
            <ul
              key={`${certificate}-active-list`}
              className={styles.componentWrap}
            >
              {data[item].map((item, index) => (
                <li key={index}>
                  <img
                    src={icons.pdfFile}
                    alt={"pdfFile"}
                    className={styles.image}
                  />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )
      )}
    </>
  );
};

PdfListDisplay.propTypes = {
  certificate: PropTypes.string,
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
