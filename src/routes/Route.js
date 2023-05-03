import React from 'react'
import HomePage from '../pages/HomePage.js';
import { Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage.js';
import SignInPage from '../pages/SignInPage.js';
import NotFound from '../components/NotFound.js';
import { withAuthentication } from '../components/AuthenticateRoute.js';

export const appPaths = {
  home: '/',
  jobDetail: '/job/:id',
  signIn: '/sign-in'
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appPaths.home} element={<HomePage />} />
      <Route
        path={appPaths.jobDetail}
        Component={withAuthentication(DetailPage)}
      />
      <Route path={appPaths.signIn} element={<SignInPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;