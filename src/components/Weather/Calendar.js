import { Fragment } from "react";

import rain from '../../assets/rain.png';
import cloudy from '../../assets/cloudy.png';


const Calendar = (props) => {
  return (
    <Fragment>
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>Wednesday, Mar 06</h4>
          </div>
          <div class="col">
            <h5>Paris</h5>
          </div>
        </div>

        <div class="weather-forecast" id="weekly-temperature">
          <div class="row">
          <div class="col">
            <div class="day">Sunday</div>
            <img src={rain} alt="Rain" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Monday</div>
            <img src={rain} alt="Rain" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Tuesday</div>
            <img src={rain} alt="Rain" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Wednesday</div>
            <img src={rain} alt="Rain" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Thursday</div>
            <img src={cloudy} alt="Cloudy" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Friday</div>
            <img src={rain} alt="Rain" />
            <div class="weather"> 20°</div>
          </div>
          <div class="col">
            <div class="day">Saturday</div>
            <img src={cloudy} alt="Cloudy" />
            <div class="weather"> 20°</div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;