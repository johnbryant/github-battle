import React from "react";
import { doBattle } from "../../util/api";
import Loading from "../Reusable/Loading";
import ResultItem from "./ResultItem";
import queryString from "query-string";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      winner: null,
      loser: null
    };
  }
  componentDidMount() {
    // console.dir(this.props);
    const search = this.props.location.search;
    const playerOne = queryString.parse(search).playerOneName;
    const playerTwo = queryString.parse(search).playerTwoName;
    doBattle([playerOne, playerTwo]).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        winner: data[0],
        loser: data[1]
      });
    });
  }

  render() {
    const { loading, winner, loser } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="battle-row">
            <ResultItem
              label="Winner"
              profile={winner.profile}
              score={winner.score}
            />
            <ResultItem
              label="Loser"
              profile={loser.profile}
              score={loser.score}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Results;
