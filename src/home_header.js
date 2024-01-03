import React from "react";
import "./index.css";
import Submit_code from "./Submit_code";
import logo from "./assets/logo_name.png";

const HomeHeader = () => {
  return (
    <div className="home_header">
      <label className="home_header__label">أهلاً</label>
      <div className="div_header">
      <img src={logo} alt="Logo" className="home_header__logo-image" />
      <h3 className="home_header__text">يا</h3>
      </div>
      {/* <Submit_code/> */}
      
    </div>
  );
};

export default HomeHeader;
