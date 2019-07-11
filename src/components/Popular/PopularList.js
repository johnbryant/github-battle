import React from "react";
import PopularItem from "./PopularItem";

class PopularList extends React.Component {
  render() {
    const { repos } = this.props;
    return (
      <ul className="popular-repos">
        {repos.map((repo, index) => {
          return <PopularItem repo={repo} key={repo.id} index={index} />;
        })}
      </ul>
    );
  }
}

export default PopularList;
