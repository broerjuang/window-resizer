// @flow

import * as React from "react";
import throttle from "lodash/throttle";
import getCurrentScreenType, { DEFAULT_BREAKPOINT } from "./utils";

import type { Screen, BreakPoint } from "./utils";

type Props = {
  ...BreakPoint,
  children: React$Node,
  throttle?: number
};

type State = {|
  width: number,
  height: number,
  screen: Screen
|};

const INTIAL_STATE = {
  width: window.innerWidth,
  height: window.innerHeight,
  screen: getCurrentScreenType(window.innerWidth, DEFAULT_BREAKPOINT)
};

const DEFAULT_THROTTLE = 100;

let { Provider, Consumer } = React.createContext(INTIAL_STATE);

class WindowResizer extends React.Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = INTIAL_STATE;
  }

  componentDidMount() {
    this._onHandleResize();
    window.addEventListener("resize", this._onHandleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._onHandleResize);
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }

  /*
    @private
  */

  _onHandleResize = throttle(() => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let breakPoint = this.props;
    let screen = getCurrentScreenType(width, {
      ...DEFAULT_BREAKPOINT,
      ...breakPoint
    });
    this.setState(state => ({
      height,
      width,
      screen
    }));
  }, this.props.throttle || DEFAULT_THROTTLE);
}

// Providing HOC module
function withWindowResizer(breakPoint: BreakPoint) {
  return (C: React.ComponentType<State>) => () => (
    <WindowResizer {...breakPoint}>
      <Consumer>
        {state => {
          return <C {...state} />;
        }}
      </Consumer>
    </WindowResizer>
  );
}

export {
  WindowResizer as WindowResizerProvider,
  Consumer as WindowResizerConsumer,
  withWindowResizer
};
