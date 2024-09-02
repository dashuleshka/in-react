import React from "react";

import "./Form.css";

export const Form = ({handleInput, searchVal, handleSearch}) => {
  return (
    <form id="my-form" action="" className="main-block__top-section-form">
      <div className="top-section-form__destination">
        <span className="top-section-form__destination--loop-icon">
          <img src="../../assets/images/search.svg" alt="searcher" />
        </span>
        <input
          className="form-input input-destination-desktop"
          id="country-desktop"
          type="text"
          name="New York"
          autoComplete="off"
          placeholder="New York"
          onChange={handleInput}
          value={searchVal}
        />
        <label className="form-label" htmlFor="country-desktop">
          Your destination or hotel name
        </label>
        <input
          className="form-input input-destination-mobile"
          id="country-mobile"
          type="text"
          name="destination"
          autoComplete="off"
          placeholder="Your destination or hotel name"
        />
      </div>
      <div className="top-section-form__date-desktop">
        <input
          className="form-input"
          id="booking-date"
          type="text"
          name="day"
          autoComplete="off"
          placeholder="Tue 15 Sept — Sat 19 Sept"
        />
        <label className="form-label" htmlFor="booking-date">
          Check-in — Check-out
        </label>
      </div>
      <div id="filter-wrapper" className="top-section-form__options-desktop">
        <input
          className="form-input"
          id="booking-positions"
          type="text"
          name="person"
          autoComplete="off"
          placeholder="2 Adults — 0 Children — 1 Room"
        />
        <label htmlFor="booking-positions"></label>
      </div>
      <div className="top-section-form__date-mobile">
        <div className="date-mobile__date-input-wrapper">
          <label htmlFor="check-in">Check-in date</label>
          <input
            className="date-mobile__date-input-wrapper--check-in"
            type="text"
            name="check-in"
            autoComplete="off"
            id="check-in"
            placeholder="Tue 15 Sept 2020"
          />
        </div>
        <div className="date-mobile__date-input-wrapper">
          <label htmlFor="check-out">Check-out date</label>
          <input
            className="date-mobile__date-input-wrapper--check-out"
            type="text"
            name="check-out"
            id="check-out"
            autoComplete="off"
            placeholder="Sat 19 Sept 2020"
          />
        </div>
      </div>
      <div className="top-section-form__options-mobile">
        <div className="options-mobile__options-input-wrapper">
          <label htmlFor="adults-stayed">Adults</label>
          <input
            className="options-mobile__options-input-wrapper--adults-input"
            type="text"
            name="adults"
            id="adults-stayed"
            autoComplete="off"
            placeholder="2"
          />
        </div>
        <div className="options-mobile__options-input-wrapper">
          <label htmlFor="children-stayed">Children</label>
          <input
            className="options-mobile__options-input-wrapper--children-input"
            type="text"
            name="children"
            id="children-stayed"
            autoComplete="off"
            placeholder="0"
          />
        </div>
        <div className="options-mobile__options-input-wrapper">
          <label htmlFor="rooms-booked">Rooms</label>
          <input
            className="options-mobile__options-input-wrapper--rooms-input"
            type="text"
            name="rooms"
            id="rooms-booked"
            autoComplete="off"
            placeholder="1"
          />
        </div>
      </div>
      <button
        disabled={!searchVal}
        onClick={handleSearch}
        type="submit"
        id="form-button"
        className="top-section-form__button"
      >
        Search
      </button>
    </form>
  );
};
