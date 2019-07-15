import React from "react";

const BattlePlayerPreview = ({ avatar, username, onReset }) => {
  return (
    <div>
      <div className="battle-form">
        <img className="profile-avatar" src={avatar} />
        <h2 className="username">@{username}</h2>
      </div>
      {onReset && (
        <button className="battle-reset" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default BattlePlayerPreview;
