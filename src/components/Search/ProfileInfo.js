import React from "react";
import moment from "moment";

const ProfileInfo = ({ profile }) => {
  const created_at = moment(profile.created_at).format("MMMM, YYYY");
  return (
    <div className="profile-info">
      <div className="profile-logo">
        <img
          className="profile-avatar"
          src={profile.avatar_url}
          alt={profile.login}
        />
        <br />
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          {profile.login}
        </a>
      </div>
      <div>
        <h3>{profile.name}</h3>
        <h4>
          <i className="fa fa-map-marker" aria-hidden="true" />{" "}
          {profile.location}
        </h4>
        <h4>Company: {profile.company}</h4>
        <p>{profile.bio}</p>
      </div>
      <div>
        <h4>
          <a href={profile.blog} target="_blank" rel="noopener noreferrer">
            {profile.blog}
          </a>
        </h4>
        <p>Repos: {profile.public_repos}</p>
        <p>Gists: {profile.public_gists}</p>
        <p>Followers: {profile.followers}</p>
        <p>Following: {profile.following}</p>
        <p>Member since: {created_at}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
