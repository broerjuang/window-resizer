# window-resizer

> render props or hoc to get your current windows

[![NPM](https://img.shields.io/npm/v/window-resizer.svg)](https://www.npmjs.com/package/window-resizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save window-resizer

or

yarn add window-resizer
```

## Usage

## HOC

```jsx
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
```

## Context

```js
import React, { Component } from "react";
import { WindowResizerProvider, WindowResizerConsumer } from "window-resizer";

const CONFIG = {
  mobile: 450,
  desktop: 1200,
  tablet: 800
};

class App extends Component {
  render() {
    return (
      <WindowResizerProvider breakPoint={CONFIG}>
        <div>
          <WindowResizerConsumer>
            {({width, height, screen}) => {
              <SomeUsage height={height} />
            }}
          <WindowResizerConsumer>
        </div>
      </WindowResizerProvider>
    );
  }
}

export default App
```

## Props

```js
type BreakPoint = {
  mobile?: number,
  tabet?: number,
  desktop?: number
};

type Screen = "MOBILE" | "TABLET" | "DESKTOP";

type Props = {
  ...BreakPoint,
  children: React$Node,
  throttle?: number
};
```

## License

MIT © [broerjuang](https://github.com/broerjuang)
