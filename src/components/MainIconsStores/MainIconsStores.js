import React from "react";

import "./MainIconsStores.css";
import GoogleStore from "../../assets/images/googlePlay.svg";
import AppStore from "../../assets/images/app.svg";

export const MainIconsStores = () => (
  <div className="main-block__game-stores">
    <a
      target="_blank"
      href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
    >
      <img src={GoogleStore} alt="google-store" />
    </a>
    <a target="_blank" href="https://www.apple.com/by/app-store/">
      <img src={AppStore} alt="app-tore" />
    </a>
  </div>
);
