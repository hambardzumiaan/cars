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
                Инфо
              </span>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/years") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/years"
                title="Год выпуска"
              >
                <span className="menu-link-text pl-2">Год выпуска</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/marks") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/marks"
                title="Марка авто"
              >
                <span className="menu-link-text pl-2">Марка авто</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/cars") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/cars" title="Машины">
                <span className="menu-link-text pl-2">Машины</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/models") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/models"
                title="Модель авто"
              >
                <span className="menu-link-text pl-2">Модель авто</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/seats") ? "bg-primary" : ""
              }`}
            >
              <Link className="nav-link text-white" to="/seats" title="Сиденья">
                <span className="menu-link-text pl-2">Сиденья</span>
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
                title="Коробка передач"
              >
                <span className="menu-link-text pl-2">Коробка передач</span>
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
                title="Двигатель"
              >
                <span className="menu-link-text pl-2">Двигатель</span>
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
                title="Тип кузова"
              >
                <span className="menu-link-text pl-2">Тип кузова</span>
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
                title="Типы дисков"
              >
                <span className="menu-link-text pl-2">Типы дисков</span>
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
                title="Тип топлива"
              >
                <span className="menu-link-text pl-2">Тип топлива</span>
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
                title="Тип транспорта"
              >
                <span className="menu-link-text pl-2">Тип транспорта</span>
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
                title="Цвет салона"
              >
                <span className="menu-link-text pl-2">Цвет салона</span>
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
                title="Цвет экстерьера"
              >
                <span className="menu-link-text pl-2">Цвет экстерьера</span>
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
                title="Наклейки"
              >
                <span className="menu-link-text pl-2">Наклейки</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
