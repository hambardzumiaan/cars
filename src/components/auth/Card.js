import React from "react";
import PropTypes from "prop-types";
import { getCurrentYear } from "../../utility";

export const Card = ({ children }) => {
  return (
    <div className="auth-main">
      <div className="card card-login text-center">{children}</div>
    </div>
  );
};

export const CardsBottomSide = () => {
  return (
    <p className="mt-2 text-muted">
      <small>© {getCurrentYear()}</small>
    </p>
  );
};

Card.propTypes = {
  children: PropTypes.any,
};

CardsBottomSide.propTypes = {
  isForgotten: PropTypes.bool,
};
