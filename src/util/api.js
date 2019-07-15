import axios from "axios";
import { baseApiUrl } from "./constant";

// get single github user
export const getUser = username => {
  return axios({
    method: "get",
    url: `${baseApiUrl}/users/${username}`
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

// get single user's public repos
export const getUserRepos = username => {
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
export const getPopularRepos = language => {
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

const handleError = err => {
  console.warn(err);
};
// assist: calculate user repos star count
const calculateStars = repos => {
  return repos.reduce((acc, cur) => acc + cur.stargazers_count, 0);
};

// assist: calculate user's socre
const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const stars = calculateStars(repos);
  return followers * 3 + stars;
};

// assist: get user's profile and score
const getUserData = username => {
  return axios.all([getUser(username), getUserRepos(username)]).then(data => {
    // console.log(data);
    const profile = data[0];
    const repos = data[1];
    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
};

// assist: sort players by score
const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

// get battle results
export const doBattle = players => {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
};
