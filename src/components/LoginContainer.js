import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/auth";

class LoginFormContainer extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.user_name, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { login }
)(LoginFormContainer);
