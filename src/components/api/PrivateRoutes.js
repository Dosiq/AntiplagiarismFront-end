import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoutes = ({children, ...rest}) => {
  const {token } = useAuth();

  // const tokenExpiration = (token) => {
  //   if (!token) return false;
  //   const tokenParts = token.split('.');
  //   const payload = JSON.parse(atob(tokenParts[1]));
  //   const expirationTime = payload.exp;
  //   const expirationDate = new Date(expirationTime * 1000);
  //   return expirationDate < new Date();
  // };

  // const tokenExpired = tokenExpiration(token);
  
  return(
    token  ? <Outlet /> : <Navigate to="/signin" />
  )
}

export default PrivateRoutes