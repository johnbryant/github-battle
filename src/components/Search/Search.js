import React from "react";
import "../../style/Search.css";
import { getUser, getUserRepos } from "../../util/api";
import ProfileInfo from "./ProfileInfo";
import ProfileRepos from "./ProfileRepos";
import Loading from "../Reusable/Loading";

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
    const { username } = this.state;
    this.setState({
      username: "",
      userInfo: null,
      userRepos: null,
      loading: true
    });

    // get user profile
    getUser(username).then(info => {
      if (info) {
        this.setState({
          userInfo: info
        });
      } else {
        alert(`${username} doesn't exist!`);
        this.textInput.value = "";
      }
    });
    // get user repos
    getUserRepos(username).then(repos => {
      this.setState({
        userRepos: repos
      });
    });
    this.setState({
      loading: false
    });
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const { username, userInfo, userRepos, loading } = this.state;
    return (
      <div className="search">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label className="searchLabel">Enter a github username</label>
          <input
            ref={node => (this.textInput = node)}
            type="text"
            placeholder="github username"
            onChange={this.handleChange}
          />
          <button className="searchButton" type="submit" disabled={!username}>
            Search
          </button>
        </form>
        <div className="profile">
          {loading ? <Loading /> : " "}
          {userInfo && <ProfileInfo profile={userInfo} />}
          {userRepos && <ProfileRepos repos={userRepos} />}
        </div>
      </div>
    );
  }
}

export default Search;
