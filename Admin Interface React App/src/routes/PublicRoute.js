import { Navigate } from "react-router-dom";
import { getToken } from "../service/AuthService";
// import React, { useState, useEffect } from "react";

// This component is a route guard for private routes.
// It checks if the user is authenticated and if not, redirects to the login page.
const PublicRoute = ({ children, ...rest }) => {
  const isAuthenticated = !getToken();
  // const [delayed, setDelayed] = useState(true);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     setTimeout(() => setDelayed(false), 2000); // 500ms delay
  //   }
  // }, [isAuthenticated]);

  // if (!isAuthenticated && delayed) {
  //   return <div><p>“Logging out returns you to login.” 😊 </p></div>;
  // }

  // if (!isAuthenticated && !delayed) {
  //   return <Navigate to="/admin_console" replace />;
  // }

  if (!isAuthenticated) {
    return <Navigate to="/admin_console" replace />;
  }

  return children;
};

export default PublicRoute;
