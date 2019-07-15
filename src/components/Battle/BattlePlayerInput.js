import React from "react";

class BattlePlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.userinput.value = null;
    this.props.onSubmit(this.state.username, this.props.id, this.props.label);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="battle-form">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          ref={node => (this.userinput = node)}
          type="text"
          placeholder="github username"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default BattlePlayerInput;
