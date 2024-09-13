import React, {useContext, useEffect} from "react";

import "./Avaliable.css";
import { PostContext } from "../PostParams";

export const AvaliableBlock = () => {
  const { hotels } = useContext(PostContext);

  return (
    <div id="available-hotels" className="hotels-block">
      <h2 className="hotels-block__heading">Hotels Available</h2>
      <div id="homes-block__content" className="hotels-block__content">
        {hotels.length > 0 ? (
          hotels.map(({ id, name, city, country, imageUrl }) => (
            <div key={id} className="hotels-block__item">
              <div>
                <img src={imageUrl} alt="Hotel" />
              </div>
              <span className="hotels-block__item--typography-subtitle">
                {name}
              </span>
              <span className="hotels-block__item--location">
                {city}, {country}
              </span>
            </div>
          ))
        ) : (
          <div id="no-available">No suitable hotels</div>
        )}
      </div>
    </div>
  );
};
