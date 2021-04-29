import React from "react";
import Model from "../components/Model";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
const LoginScreen = () => {
  const { model } = useSelector((state) => state.general);
  return (
    <div>
      {model && <Model />}
      <Nav />
    </div>
  );
};

export default LoginScreen;
