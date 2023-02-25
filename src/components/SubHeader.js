import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({
  title,
  actions = "",
  isThereActionsWithoutMainElement = false,
}) => {
  return (
    <>
      <div className="align-items-center d-flex mb-3 pb-2 pt-3">
        <h1 className="col-md-6 col h2 p-0">{title}</h1>
        {!isThereActionsWithoutMainElement ? (
          <div className="text-right col">{actions}</div>
        ) : (
          actions
        )}
      </div>
    </>
  );
};

SubHeader.propTypes = {
  isThereActionsWithoutMainElement: PropTypes.bool,
  title: PropTypes.any,
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
};

export default SubHeader;
