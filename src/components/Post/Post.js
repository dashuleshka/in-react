import React, { Component } from "react";
import { getPosts } from "../../services/popular";
import { popularPosts } from "../../services/constants";

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    getPosts(popularPosts).then((data) => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;

    return (
      <div id="hotels-block" className="hotels-block">
        <h2 className="hotels-block__heading">Homes guests loves</h2>
        <div id="homes-block__content" className="hotels-block__content">
          {posts.map(({ id, name, city, country, imageUrl }) => (
            <div key={`${name}${city}`} id={id} className="hotels-block__item">
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
          ))}
        </div>
      </div>
    );
  }
}
