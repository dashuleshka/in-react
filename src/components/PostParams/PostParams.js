import React, { Component } from "react";
import axios from "axios";

import { apiUrl } from "../../services/constants";
import "./PostParams.css";

export class PostParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      visible: "visible",
    };
  }

  async componentDidUpdate(prevProps) {
    const { searchVal } = this.props;
    if (searchVal !== prevProps.searchVal) {
      await this.fetchPosts(searchVal);
    }
  }

  async fetchPosts(searchVal) {
    try {
      const { data: posts } = await axios.get(apiUrl, {
        params: { search: searchVal },
      });
      this.setState({ posts, visible: posts.length > 0 ? 'hidden':'visible' });
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { posts, visible } = this.state;

    return (
      <div id="available-hotels" className="hotels-block">
        <h2 className="hotels-block__heading">Hotels Available</h2>
        <div id="homes-block__content" className="hotels-block__content">
          {posts.map(({ id, name, city, country, imageUrl }) => (
            <div key={`${name}${city}${id}`} id={id} className="hotels-block__item">
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
        <div id="no-available" style={{ visibility: visible }}>
          No suitable hotels
        </div>
      </div>
    );
  }
}
