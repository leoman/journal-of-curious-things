import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  isVerified: boolean
  component?: any
  path?: string
  exact?: boolean
  children?: any
}

function ProtectedRoute({ isVerified, component: Component, ...restOfProps }: Props) {
  
  if(!isVerified) return <Redirect to={'/admin/login'} />
  
  return (
    <Route {...restOfProps} render={(props) => <Component {...props} />} />
  );
}

export default ProtectedRoute;