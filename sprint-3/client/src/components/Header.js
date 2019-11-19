import React from "react";
import logo from "../assets/logo/Logo-brainflix.svg";
import avatar from "../assets/images/avatar.jpg";
import plus from "../assets/icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <div className="header">
        <Link to="/" className="header__logo">
          <img className="header__logo--image" src={logo} alt="sucks" />
        </Link>
        <input
          className="header__searchbar"
          type="text"
          placeholder="Search"
        ></input>
        <div className="header__button-section">
          <Link to="/upload" className="header__button-section--button">
            <button className="header__button-section--button">
              <img
                className="header__button-section--plus"
                src={plus}
                alt="plus"
              />{" "}
              UPLOAD
            </button>
          </Link>
          <img
            className="header__button-section--NOOR"
            src={avatar}
            alt="the face"
          />
        </div>
      </div>
    </header>
  );
}
