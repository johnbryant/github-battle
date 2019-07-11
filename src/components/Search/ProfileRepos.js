import React from "react";
import Repo from "./Repo";

const ProfileRepos = ({ repos }) => {
  return (
    <div className="profile-repos">
      {repos.map(repo => {
        return <Repo repo={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default ProfileRepos;
