import axios from "axios";
import { baseApiUrl } from "./constant";

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

export { getUser, getUserRepos };
