import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PDFDownloadButton.module.scss";

export const PDFDownloadButton = ({ folderPath, btnText, btnType }) => {
  const fileUrl = `${folderPath}`;

  const downloadBtn =
    btnType === "goToPage" ? (
      <Link to={fileUrl} className={styles.downloadLink}>
        <button type="button">{btnText}</button>
      </Link>
    ) : (
      <a
        href={fileUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadLink}
      >
        <button type="button">{btnText}</button>
      </a>
    );

  return <>{downloadBtn}</>;
};

PDFDownloadButton.propTypes = {
  folderPath: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};
