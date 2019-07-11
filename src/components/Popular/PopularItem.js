import React from "react";

const PopularItem = ({ repo, index }) => {
  return (
    <li className="popular-repo">
      <div className="popular-rank">#{index + 1}</div>
      <div className="popular-item-info">
        <img src={repo.owner.avatar_url} />
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <p>@{repo.owner.login}</p>
        <p>stars: {repo.stargazers_count}</p>
      </div>
    </li>
  );
};

export default PopularItem;
