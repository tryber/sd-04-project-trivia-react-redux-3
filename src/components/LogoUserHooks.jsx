import React, { Component } from "react";
import { useSelector } from "react-redux";

const LogoUser = () => {
  const { urlGravatar } = useSelector((state) => state.login);

  return (
    <div>
      <img src={urlGravatar} />
    </div>
  );
};

export default LogoUser;
