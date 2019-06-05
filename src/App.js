import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Routes from "./components/Routes";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <Landing />
      </Provider>
    );
  }
}

export default App;
