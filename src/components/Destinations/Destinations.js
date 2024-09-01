import React from "react";
import './Destinations.css';
import maldivesImg from '../../assets/images/maldives.png'
import spainImg from '../../assets/images/spain.png'
import norwayImg from '../../assets/images/norway.png'
import islandImg from '../../assets/images/island.png'
import arrow from '../../assets/images/arrow-1.svg';

export const Destinations = () => {
  return (<div className="destinations-block">
    <div className="container destination-padding">
      <h2 className="destinations-block__heading">The best destinations</h2>
      <div className="destinations-block__buttons">
        <button>Regions</button>
        <button>Cities</button>
        <button>
            <span className="buttons-destinations__text--desktop"
            >Places of interest</span
            >
          <span className="buttons-destinations__text--mobile">Places</span>
        </button>
      </div>
      <section className="destinations-block__content">
        <div className="destinations-content__item">
          <div className="destination-img-wrapper">
            <img src={maldivesImg} alt="Maldives" />
            <button className="destination-item-button">Book now</button>
          </div>
          <span className="destinations-item__typography-subtitle">Maldives</span>
        </div>
        <div className="destinations-content__item">
          <div className="destination-img-wrapper">
            <img src={spainImg} alt="Spain" />
            <button className="destination-item-button">Book now</button>
          </div>
          <span className="destinations-item__typography-subtitle">Spain</span>
        </div>
        <div className="destinations-content__item">
          <div className="destination-img-wrapper">
            <img src={norwayImg} alt="Norway" />
            <button className="destination-item-button">Book now</button>
          </div>
          <span className="destinations-item__typography-subtitle">Norway</span>
        </div>
        <div className="destinations-content__item">
          <div className="destination-img-wrapper">
            <img src={islandImg} alt="Island" />
            <button className="destination-item-button">Book now</button>
          </div>
          <span className="destinations-item__typography-subtitle">Island</span>
        </div>
      </section>
      <div className="destinations-block__arrow-img">
        <img src={arrow} alt="switch" />
      </div>
    </div>
  </div>)
}
