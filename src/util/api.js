import axios from "axios";
import { baseApiUrl } from "./constant";

// get single github user
const getUser = username => {
  return axios({
    method: "get",
    url: `${baseApiUrl}/users/${username}`
  }).then(
    user => {
      console.log(user.data);
      return user.data;
    },
    err => {
      console.error(err);
    }
  );
};

// get single user's public repos
const getUserRepos = username => {
  return axios({
    method: "get",
    url: `${baseApiUrl}/users/${username}/repos?order=asc&sort=updated`
  }).then(
    res => {
      // console.log(res);
      return res.data;
    },
    err => {
      console.error(err);
    }
  );
};

// get popular repositories
const getPopularRepos = language => {
  const url = `${baseApiUrl}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc`;
  return axios({
    method: "get",
    url: url
  }).then(
    res => {
      // console.log(res);
      return res.data.items;
    },
    err => console.error(err)
  );
};

export { getUser, getUserRepos, getPopularRepos };
