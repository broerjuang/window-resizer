import React, { Component } from "react";

import { withWindowResizer } from "window-resizer";

class App extends Component {
  render() {
    return <h1>Resizer</h1>;
  }
}

let config = {
  mobile: 450,
  desktop: 1200,
  tablet: 800
};

export default withWindowResizer(config)(App);
