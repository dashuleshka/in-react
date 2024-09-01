import "./Content.css";
import React from "react";
import { data } from "../Container/config";

export const Content = () => (
  <>
    <h2 className="hotels-block__heading">Homes guests loves</h2>
    <div id="homes-block__content" className="hotels-block__content">
      {data.map(({ id, name, city, country, imageUrl }) => (
        <div key={`${name}${city}`} id={id} className="hotels-block__item">
          <div>
            <img src={imageUrl} alt="Hotel image" />
          </div>
          <span className="hotels-block__item--typography-subtitle">
            {name}
          </span>
          <span className="hotels-block__item--location">
            {city}, {country}
          </span>
        </div>
      ))}
    </div>
  </>
);
