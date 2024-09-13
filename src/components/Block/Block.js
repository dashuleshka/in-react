import React from "react";

import "./Block.css";
import { Container } from "../Container";
import {Post} from "../Post";
import {Content} from "../Content";

export const Block = () => (
    <Container className="hotels-block__guests-loves-padding">
      <Post />
      {/*<Content/>*/}
    </Container>
);
