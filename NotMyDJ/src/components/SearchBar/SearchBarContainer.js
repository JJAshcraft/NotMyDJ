import React from "react";
import Icon from "./Icon";
import "./searchbar.css";

const SearchBarContainer = props => (
  <div className="searchbar-container">
    <div className="inside-left-searchbar">
      <Icon icon={<i class="fas fa-headphones fa-3x" />} />
      <div className="logo">NotMyDJ</div>
    </div>
    <div>
      <input
        type="text"
        onChange={props.search}
        name="search"
        className="search-input"
        placeholder="Search Playlists"
      />
    </div>

    <div className="inside-right-searchbar">
      {/* <Icon icon={<i class="fas fa-magic fa-3x" />} /> */}
      {/* <Icon icon={<i className="far fa-heart right-icons" />} />
      <Icon icon={<i className="far fa-user right-icons" />} /> */}
    </div>
  </div>
);

export default SearchBarContainer;
