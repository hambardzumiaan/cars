import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "../../routes/PrivateRoutes";
import { publicRoutes } from "../../routes/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "../../components/PageNotFound";
import MainLayout from "../../components/layouts/MainLayout";
import RouteListenerLayout from "../../components/router/RouteListenerLayout";
import { getModelsRequest } from "../../redux/models/actions";

const Index = () => {
  const dispatch = useDispatch();
  const { isGetModelsSuccess } = useSelector((state) => state.models);
  const token = localStorage.getItem("token");
  const prevURL = localStorage.getItem("prevURL");

  useEffect(() => {
    if (token) {
      dispatch(getModelsRequest());
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <RouteListenerLayout logged={token || isGetModelsSuccess} />
            }
          >
            {privateRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  token || isGetModelsSuccess ? (
                    route.element
                  ) : (
                    <Navigate to={"/login"} replace />
                  )
                }
                exact={route.exact}
              />
            ))}
            {publicRoutes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  token || isGetModelsSuccess ? (
                    <Navigate to={prevURL ? prevURL : "/marks"} replace />
                  ) : (
                    route.element
                  )
                }
                exact={route.exact}
              />
            ))}
            <Route
              path={"*"}
              element={
                token || isGetModelsSuccess ? (
                  <MainLayout>
                    <PageNotFound isLogged={true} />
                  </MainLayout>
                ) : (
                  <PageNotFound isLogged={false} />
                )
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
