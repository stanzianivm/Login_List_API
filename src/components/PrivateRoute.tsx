import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children
}) => {
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;