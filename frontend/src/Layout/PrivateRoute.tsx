import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context";
import Layout from "./index";

const PrivateRouteLayout = () => {
  const { isAuthenticated, isLoading, verifyAuth } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    verifyAuth?.();
  }, [isAuthenticated, isLoading, navigate, verifyAuth]);


  return <>{isAuthenticated ? <Layout /> : "true"}</>;
};

export default PrivateRouteLayout;
