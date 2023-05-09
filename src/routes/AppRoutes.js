import React from "react";
import HomePage from "../pages/HomePage.js";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage.js";

import NotFound from "../components/NotFound.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job/:id" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
