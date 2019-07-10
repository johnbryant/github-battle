import React from "react";
import ReactDOM from "react-dom";
import "../../style/Search.css";
import { getUser, getUserRepos } from "../../util/api";
import ProfileInfo from "./ProfileInfo";
import ProfileRepos from "./ProfileRepos";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userInfo: null,
      userRepos: null,
      loading: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // get user profile
    getUser(this.state.username).then(info => {
      this.setState({
        userInfo: info
      });
    });
    // get user repos
    getUserRepos(this.state.username).then(repos => {
      console.log(repos);
      this.setState({
        userRepos: repos
      });
    });
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const { username, userInfo, userRepos } = this.state;
    return (
      <div className="search">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label className="searchLabel">Enter a github username</label>
          <input
            type="text"
            placeholder="github username"
            onChange={this.handleChange}
          />
          <button className="searchButton" type="submit" disabled={!username}>
            Search
          </button>
        </form>
        <div className="profile">
          {userInfo && <ProfileInfo profile={userInfo} />}
          {userRepos && <ProfileRepos repos={userRepos} />}
        </div>
      </div>
    );
  }
}

export default Search;
