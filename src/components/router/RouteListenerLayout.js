import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RouteListenerLayout = ({ children, logged }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      if (logged) {
        return navigate("/marks");
      } else {
        return navigate("/login");
      }
    }
  }, [pathname]);

  return (pathname !== "/" && children) ?? <Outlet />;
};

RouteListenerLayout.propTypes = {
  children: PropTypes.any,
  logged: PropTypes.any,
};

export default RouteListenerLayout;
