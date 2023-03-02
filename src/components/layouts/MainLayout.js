import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MainContext } from "../../context/contexts";
import PropTypes from "prop-types";
import usePrevious from "../../utility/hooks/usePrevious";
import Header from "../../components/layouts/Header";
import Navbar from "../../components/layouts/Navbar";

const MainLayout = ({ children }) => {
  const { models, isGetModelsSuccess } = useSelector((state) => state.models);

  const prevIsGetModelsSuccess = usePrevious(isGetModelsSuccess);
  const token = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isGetModelsSuccess && prevIsGetModelsSuccess === false) {
      console.log(models);
    }
  }, [isGetModelsSuccess]);

  useEffect(() => {
    if (!token) {
      window.location.replace("/login");
    }
  }, [token]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <>
      <MainContext.Provider value={{ setIsLoading, isLoading, isMobile }}>
        <Header isLoading={isLoading} />
        <div className="container-fluid">
          <div className="row">
            <Navbar />
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 px-4 min-h-100vh"
            >
              {children}
            </main>
          </div>
        </div>
      </MainContext.Provider>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
