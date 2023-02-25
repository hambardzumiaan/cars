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
                url.includes("/mileage-measurement") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/mileage-measurement"
                title="Измерение пробега"
              >
                <span className="menu-link-text pl-2">Измерение пробега</span>
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
                url.includes("/locations") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/locations"
                title="Место нахождения"
              >
                <span className="menu-link-text pl-2">Место нахождения</span>
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
                url.includes("/damage") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/damage"
                title="Повреждения"
              >
                <span className="menu-link-text pl-2">Повреждения</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/auto-drive") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/auto-drive"
                title="Привод авто"
              >
                <span className="menu-link-text pl-2">Привод авто</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/slider-on-homepage") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/slider-on-homepage"
                title="Слайдер на главной"
              >
                <span className="menu-link-text pl-2">Слайдер на главной</span>
              </Link>
            </li>
            <li
              className={`nav-item menu-link-element ${
                url.includes("/clutch") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/clutch"
                title="Сцепления"
              >
                <span className="menu-link-text pl-2">Сцепления</span>
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
                url.includes("/service-types") ? "bg-primary" : ""
              }`}
            >
              <Link
                className="nav-link text-white"
                to="/service-types"
                title="Тип услуги"
              >
                <span className="menu-link-text pl-2">Тип услуги</span>
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
