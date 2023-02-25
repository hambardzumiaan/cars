import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { privateRoutes } from "../../routes/PrivateRoutes";
import { MainContext } from "../../context/contexts";
import { Loader } from "../../utility";

const Header = ({ isLoading }) => {
  const { isMobile } = useContext(MainContext);

  const onHandleLogout = () => {
    localStorage.removeItem("token");
    const route = privateRoutes.find(
      (route) => route.path === window.location.pathname
    );
    if (route) {
      localStorage.setItem("prevURL", window.location.pathname);
    } else {
      localStorage.removeItem("prevURL");
    }
    window.location.replace("/login");
  };

  return (
    <nav
      className={`navbar navbar-dark fixed-top bg-secondary shadow flex-nowrap p-0 ${
        isMobile ? "px-2" : ""
      }`}
    >
      {isMobile ? (
        <button
          className="navbar-toggler p-0 text-sm font-size-18"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="#navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      ) : null}
      <Link
        className={`${
          !isMobile
            ? "col-sm-3 col-lg-2 col-md-3"
            : isMobile
              ? ""
              : "col-auto ml-auto header-logo-link-sidebar"
        } ${!isMobile ? "navbar-brand" : ""} p-2 mr-0 p-0 pl-1`}
        to="/dashboard"
      >
        <span className={`${!isMobile ? "header-logo-sidebar" : ""}`}>
          Logo
        </span>
      </Link>
      {isLoading && <Loader />}
      <ul className="ml-md-auto mr-0 mr-md-4 navbar-nav">
        <li className="nav-item dropdown">
          <button
            className="btn btn-dark btn-sm dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="mr-1">Settings</span>
          </button>
          <div
            className={`dropdown-menu dropdown-menu-md-right position-absolute ${
              isMobile ? "right-0" : ""
            }`}
            aria-labelledby="dropdownMenuLink"
          >
            <button
              className="dropdown-item"
              type="button"
              onClick={onHandleLogout}
            >
              Sign out
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool,
};

export default Header;
