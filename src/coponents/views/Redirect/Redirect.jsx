import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Redirect = ({ redirectUrl }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${redirectUrl}`);

    return () => {};
  }, [navigate, redirectUrl]);

  return <div>{redirectUrl}</div>;
};

Redirect.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
};
