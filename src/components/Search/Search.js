import React from "react";
import ReactDOM from "react-dom";
import "../../style/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="searchForm">
          <label className="searchLabel">Enter a github username</label>
          <input type="text" placeholder="github username" />
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
        <div className="profile">
          <div className="profileInfo">Info</div>
          <div className="profileRepo">Repo</div>
        </div>
      </div>
    );
  }
}

export default Search;
