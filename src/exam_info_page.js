import React from "react";
import logo from "./assets/logo_name.png";
import { Navigate} from "react-router-dom";



function Header() {
    return (
      <nav className="header">
        <div className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-image" />
        </div>
      </nav>
    );
  }

  export default function exam_info(){
    return (
        <div className="Container">
          <Header />
          <label className="exam_info__label"> : ادخل كود الاختبار </label>
          <div className="exam_info__input-container">
          <button className="exam_info__button"> </button>
            <input
              type="text"
              id="textField"
              className="exam_info__input"
            />
          </div>
        </div>
      )
    }