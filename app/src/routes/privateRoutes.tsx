import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/auth";
import { Loading } from "../components/loading/Loading";

export function PrivateRoutes({ children }: { children: JSX.Element }) {
  const { signed, loading, user } = useContext(AuthContext);
  console.log(signed, user, loading);
  if (loading) {
    return <Loading />;
  }

  return signed ? children : <Navigate to="/login" />;
}
