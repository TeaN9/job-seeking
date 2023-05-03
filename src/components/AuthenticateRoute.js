import React from 'react'
import { useAuthenticationContext } from '../context/Auth';
import { Navigate } from 'react-router-dom';
import { appPaths } from '../routes/Route';

const AuthenticateRoute = ({ children }) => {
  const { isLoggedIn } = useAuthenticationContext();

  if (!isLoggedIn) {
    return <Navigate to={appPaths.signIn} />;
  }

  return <>{children}</>
}

export const withAuthentication = (Component) => {
  return (props) => {
    const { isLoggedIn } = useAuthenticationContext();

    if (!isLoggedIn) {
      return <Navigate to={appPaths.signIn} />;
    }

    return <Component {...props} />
  }
}

export default AuthenticateRoute