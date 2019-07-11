import React from "react";
import "../../style/Loading.css";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  componentDidMount() {
    const stopper = this.props.text + "...";
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState(prev => {
          return {
            text: prev.text + "."
          };
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <div className="loading">{this.state.text}</div>;
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 500
};

export default Loading;
