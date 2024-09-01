import React, { useState } from "react";

import "./App.css";
import { Block } from "../Block";
import { OfferBlock } from "../OfferBlock";
import { Footer } from "../Footer";
import { data } from "../Container/config";
import { Form } from "../Form";
import {Container} from "../Container";
import {Header} from "../Header";
import {MainIconsStores} from "../MainIconsStores";
import {PostParams} from "../PostParams";

export const App = () => {
  const [searchVal, searchState] = useState("");
  const [hotelsVal, setHotelsVal] = useState([]);

  const handleInput = (event) => {
    searchState(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setHotelsVal(
      data.filter(({ name, city, country }) => {
        return (
          name.toLowerCase().includes(searchVal.toLowerCase()) ||
          city.toLowerCase().includes(searchVal.toLowerCase()) ||
          country.toLowerCase().includes(searchVal.toLowerCase())
        );
      }),
    );
  };


  const visibleStatus = () => {
    return hotelsVal.length ? 'hidden' : 'visible';
  };

  return (
    <div>
      <div className="main-block">
        <Container>
          <Header />
          <Form
            handleInput={handleInput}
            searchVal={searchVal}
            handleSearch={handleSearch}
          />
          <MainIconsStores />
        </Container>
      </div>
      <OfferBlock />
      <PostParams searchVal={searchVal} visible={visibleStatus()}/>
      <Block></Block>
      <Footer className="footer-block__padding" />
    </div>
  );
};
