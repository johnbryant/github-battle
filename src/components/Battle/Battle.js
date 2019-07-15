import React from "react";
import BattlePlayerInput from "./BattlePlayerInput";
import BattlePlayerPreview from "./BattlePlayerPreview";
import { getUser } from "../../util/api";
import { Link } from "react-router-dom";
import "../../style/Battle.css";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: null,
      playerTwo: null
    };
  }

  handleSubmit = (username, id, label) => {
    getUser(username).then(user => {
      if (user) {
        console.log(user);
        this.setState(() => {
          const newState = {};
          newState[id] = user;
          return newState;
        });
      } else {
        alert(label + " doesn't exist!");
      }
    });
  };

  render() {
    const { playerOne, playerTwo } = this.state;
    const { match } = this.props;
    return (
      <div className="battle">
        <div className="battle-row">
          {!playerOne ? (
            <BattlePlayerInput
              label="User One"
              id="playerOne"
              onSubmit={this.handleSubmit}
            />
          ) : (
            <BattlePlayerPreview
              avatar={playerOne.avatar_url}
              username={playerOne.login}
            />
          )}
          {!playerTwo ? (
            <BattlePlayerInput
              label="User Two"
              id="playerTwo"
              onSubmit={this.handleSubmit}
            />
          ) : (
            <BattlePlayerPreview
              avatar={playerTwo.avatar_url}
              username={playerTwo.login}
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <Link
            className="button"
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOne.login}&playerTwoName=${
                playerTwo.login
              }`
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}

export default Battle;
