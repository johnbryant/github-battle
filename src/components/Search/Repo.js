import React from "react";

const Repo = ({ repo }) => (
  <div className="profile-repo">
    <h3>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </h3>
    <p>{repo.description}</p>
    <br />
    <div className="repo-stats">
      Stars: {repo.stargazers_count} {"  "}Forks: {repo.forks_count}
    </div>
    <p>Main Language: {repo.language}</p>
    <a
      className="repo-button"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Repo
    </a>
  </div>
);

export default Repo;
