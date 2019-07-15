import React from "react";
import BattlePlayerPreview from "./BattlePlayerPreview";
import ProfileInfo from "../Search/ProfileInfo";

const ResultItem = ({ label, profile, score }) => {
  return (
    <div className="battle-column">
      <h1 className="header">{label}</h1>
      <h3>Score: {score}</h3>
      <ProfileInfo profile={profile} />
    </div>
  );
};

export default ResultItem;
