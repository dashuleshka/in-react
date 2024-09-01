import "./Avaliable.css";
import axios from "axios";
import {popularPosts} from "../../services/constants";
import {render} from "@testing-library/react";

export class AvaliableBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const data = await axios.get(popularPosts, {params: {
      search: {searchVal}
      }});
    }

  render() {
    return <div id="available-hotels" className="hotels-block">
      <h2 className="hotels-block__heading">Hotels Available</h2>
      <div id="homes-block__content" className="hotels-block__content">
        {hotels.map(({ id, name, city, country, imageUrl }) => (
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
      <div id="no-available" style={{visibility: visible}}>No suitable hotels</div>
    </div>
  }
}


export const AvaliableBlock = ({hotels, visible}) => {
  return <div id="available-hotels" className="hotels-block">
    <h2 className="hotels-block__heading">Hotels Available</h2>
    <div id="homes-block__content" className="hotels-block__content">
      {hotels.map(({ id, name, city, country, imageUrl }) => (
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
    <div id="no-available" style={{visibility: visible}}>No suitable hotels</div>
  </div>
};
