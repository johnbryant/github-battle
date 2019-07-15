import React from "react";
import PopularList from "./PopularList";
import LanguageSelector from "./LanguageSelector";
import Loading from "../Reusable/Loading";
import "../../style/Popular.css";
import { getPopularRepos } from "../../util/api";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "All",
      repos: null
    };
  }

  componentDidMount() {
    console.dir(this.props);
    this.selectedLanguage(this.state.language);
  }

  selectedLanguage = language => {
    // console.log(language);
    this.setState({
      language: language,
      repos: null
    });
    getPopularRepos(language).then(repos => {
      // console.log(repos);
      this.setState({
        repos: repos
      });
    });
  };

  render() {
    const { language, repos } = this.state;
    return (
      <div>
        <LanguageSelector
          language={language}
          onSelect={this.selectedLanguage}
        />
        {!this.state.repos ? <Loading /> : <PopularList repos={repos} />}
      </div>
    );
  }
}

export default Popular;
