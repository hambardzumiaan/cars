import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import usePrevious from "../../utility/hooks/usePrevious";
import { MainContext } from "../../context/contexts";

const Navbar = () => {
  const { isMobile } = useContext(MainContext);
  const navbarRef = useRef();
  const url = window.location.pathname;
  const prevLocationPathName = usePrevious(window.location.pathname);

  useEffect(() => {
    if (prevLocationPathName) {
      if (window.location.pathname !== prevLocationPathName) {
        navbarRef.current?.classList?.remove("show");
      }
    }
  }, [window.location.pathname]);

  return (
    <>
      <nav
        className={`col-lg-2 col-md-3 ${
          isMobile ? "collapse" : "d-none d-md-block"
        } bg-secondary sidebar sidebar-menu-wrapper`}
        id="navbarToggle"
        ref={navbarRef}
      >
        <div className="pb-4 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item pt-3">
              <span className="font-monospace nav-link text-white-50">
                Info
              </span>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/years") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/years" title="Years">
                <span className="menu-link-text pl-2">Years</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/marks") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/marks" title="Marks">
                <span className="menu-link-text pl-2">Marks</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/cars") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/cars" title="Cars">
                <span className="menu-link-text pl-2">Cars</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/models") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/models" title="Models">
                <span className="menu-link-text pl-2">Models</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/seats") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/seats" title="Seats">
                <span className="menu-link-text pl-2">Seats</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/transmissions") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/transmissions"
                title="Transmissions"
              >
                <span className="menu-link-text pl-2">Transmissions</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/engines") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/engines"
                title="Engines"
              >
                <span className="menu-link-text pl-2">Engines</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/body-styles") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/body-styles"
                title="Body styles"
              >
                <span className="menu-link-text pl-2">Body styles</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/drive-types") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/drive-types"
                title="Drive types"
              >
                <span className="menu-link-text pl-2">Drive types</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/fuel-types") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/fuel-types"
                title="Fuel types"
              >
                <span className="menu-link-text pl-2">Fuel types</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/transport-types") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/transport-types"
                title="Transport types"
              >
                <span className="menu-link-text pl-2">Transport types</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/interior-colors") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/interior-colors"
                title="Interior colors"
              >
                <span className="menu-link-text pl-2">Interior colors</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/exterior-colors") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/exterior-colors"
                title="Exterior colors"
              >
                <span className="menu-link-text pl-2">Exterior colors</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/stickers") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/stickers"
                title="Stickers"
              >
                <span className="menu-link-text pl-2">Stickers</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
