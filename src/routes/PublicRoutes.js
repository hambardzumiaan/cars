import React from "react";
import Login from "../components/auth/Login";
export const publicRoutes = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
    exact: true,
  },
];
