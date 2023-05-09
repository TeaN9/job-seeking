import React from "react";
import HomePage from "../pages/HomePage.js";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailPage from "../pages/DetailPage.js";
import SignInPage from "../pages/SignInPage.js";
import NotFound from "../components/NotFound.js";
import { AuthenticateRoute } from "../components/AuthenticateRoute.js";
import { appPaths } from "../Constant";

const AppRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path={appPaths.home} element={<HomePage />} />

        <Route
          path={appPaths.jobDetail}
          element={
            <AuthenticateRoute>
              <DetailPage />
            </AuthenticateRoute>
          }
        />
        <Route path={appPaths.signIn} element={<SignInPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route path={appPaths.home} element={<HomePage />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
