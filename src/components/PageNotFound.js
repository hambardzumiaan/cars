import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageNotFound = ({ isLogged }) => {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <section className="d-flex justify-content-center align-items-center error-section">
      <div className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
        <h3 className="h2 text-center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Похоже, ты потерялся
        </h3>

        <h5 className="text-center">
          <p>страница, которую вы ищете, недоступна!</p>
          {!isLogged && (
            <Link to="/login" className="btn btn-primary mt-3">
              Перейти к входу
            </Link>
          )}
        </h5>
      </div>
    </section>
  );
};

PageNotFound.propTypes = {
  isLogged: PropTypes.bool,
};

export default PageNotFound;
