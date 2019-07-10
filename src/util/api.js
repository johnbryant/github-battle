import axios from "axios";
import { baseUrl } from "./constant";

const getUser = username => {
  return axios({
    method: "get",
    url: `${baseUrl}/users/${username}`
  }).then(
    user => {
      // console.log(user.data);
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
    url: `${baseUrl}/users/${username}/repos`
  }).then(
    res => {
      // console.log(res);
      return res.data;
    },
    err => {
      console.err(err);
    }
  );
};

export { getUser, getUserRepos };
