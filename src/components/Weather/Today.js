import { Fragment } from "react";

import humidityImage from '../../assets/humidity.png';
import windImage from '../../assets/wind.png';

const Today = (props) => {
  return (
    <div>
      <h1>12º</h1>
      <hr />
      <h2>Cloudy</h2>
      <h3>9:34</h3>
      <div class="forecast">
        <p class="precipitation">
          <span>
            <img src={humidityImage} alt="Rain" />
          </span>
          <span id="humidity">70</span> %
        </p>
        <p class="wind">
          <span>
            <img src={windImage} alt="Wind" />
          </span>
          <span id="speed">2</span> km/h
        </p>
      </div>
    </div>
  );
};

export default Today;