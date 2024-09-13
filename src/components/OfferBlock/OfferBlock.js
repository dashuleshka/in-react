import React from "react";

import "./OfferBlock.css";
import OfferImg from "../../assets/images/support.svg";
import CommunicateImg from "../../assets/images/communicate.svg";
import GadgetImg from "../../assets/images/gadget.svg";
import LikeImg from "../../assets/images/like.svg";

export const OfferBlock = () => (
  <div className="container offer-block">
    <h2 className="offer-block__heading">What do we offer</h2>
    <div className="offer-block__content">
      <div className="offer-block__item col-md-3">
        <div className="offer-item__img-wrapper">
          <img src={OfferImg} alt="support-image" />
        </div>
        <span className="offer-block__item--text">Support 24/7</span>
      </div>
      <div className="offer-block__item col-md-3">
        <div className="offer-item__img-wrapper">
          <img src={CommunicateImg} alt="communicate" />
        </div>
        <span className="offer-block__item--text">Communicate directly</span>
      </div>
      <div className="offer-block__item col-md-3">
        <div className="offer-item__img-wrapper">
          <img src={GadgetImg} alt="gadget" />
        </div>
        <span className="offer-block__item--text">Book online</span>
      </div>
      <div className="offer-block__item col-md-3">
        <div className="offer-item__img-wrapper">
          <img src={LikeImg} alt="like" />
        </div>
        <span className="offer-block__item--text">Real guest reviews</span>
      </div>
    </div>
  </div>
);
