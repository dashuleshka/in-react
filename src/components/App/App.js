import React, { useState } from "react";
import "./App.css";
import { OfferBlock } from "../OfferBlock";
import { Footer } from "../Footer";
import { Form } from "../Form";
import { Container } from "../Container";
import { Header } from "../Header";
import { MainIconsStores } from "../MainIconsStores";
import { PostParams, PostProvider } from "../PostParams";
import { Destinations } from "../Destinations";
import { Content } from "../Content";
import { AvaliableBlock } from "../AvaliableBlock/AvaliableBlock";

export const App = () => {
  return (
    <div>
      <PostProvider>
        <div className="main-block">
          <Container>
            <Header />
            <Form />
            <MainIconsStores />
          </Container>
        </div>
        <OfferBlock />
        <AvaliableBlock />
        <Content />
      </PostProvider>
        <Destinations />
        <Footer className="footer-block__padding" />
    </div>
  );
};
