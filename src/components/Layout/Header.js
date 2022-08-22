import { Fragment } from 'react';

const Header = (props) => {
  return (
    <div>
      <header >
      </header>
      <div className="search">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a city"
          autocomplete="off"
          autofocus="on"
          id="search-text-input"
        />
        <input type="submit" className="btn_light" value="Search" />
      </div>
    </div>
  );
};

export default Header;