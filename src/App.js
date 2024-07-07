import React from "react";
import logo from "./assets/logo_name.png";
import Submit_code from "./Submit_code";
import Box from "./home_header";
import "./index.css";

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#">تواصل معنا</a>
          </li>
          <li className="footer__item">
            <a href="#">الأحكام والشروط</a>
          </li>
          <li className="footer__item">
            <a href="#">عن موقع نَبيه</a>
          </li>
        </ul>
        <img src={logo} alt="Logo" className="footer__logo-image" />
      </div>
    </footer>
  );
}

function App() {
  const [gotopage, setgotopage] = React.useState(false);

  const handleCreateExam = () => {
    setgotopage(true);
  };


  return (
    <div className="Container">
      <Box />
      <Submit_code />
      <label className="label"> أو</label>
      <button className="new_exam__button" onClick={handleCreateExam}>
        اصنع اختبار
      </button>
      <Footer />
    </div>
  );
}

export default App;
