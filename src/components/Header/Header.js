import React from "react";

import "./Header.css";
import logo from "../../assets/images/logo.svg";
import theme from "../../assets/images/theme.svg";
import account from "../../assets/images/account.svg";
import menu from "../../assets/images/menu.svg";
export const Header = () => (
  <div>
    <header className="main-block__header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__navigation-buttons">
        <div className="navigation-buttons__links-block">
          <a className="navigation-buttons__links-block--header-links" href="#">
            Stays
          </a>
          <a className="navigation-buttons__links-block--header-links" href="#">
            Attractions
          </a>
        </div>
        <div className="navigation-buttons__buttons-block">
          <button className="navigation-buttons__buttons-block--theme-button">
            <img src={theme} alt="theme" />
          </button>
          <button className="navigation-buttons__buttons-block--account-button">
            <img src={account} alt="account" />
          </button>
          <button className="navigation-buttons__buttons-block--menu-button">
            <img src={menu} alt="menu" />
          </button>
        </div>
      </nav>
    </header>
    <h1 className="main-block__main-heading">
      Discover stays
      <br />
      to live, work or just relax
    </h1>
  </div>
);
