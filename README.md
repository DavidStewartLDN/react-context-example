# React Context Example

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/risan/react-context-example)
[![License](https://img.shields.io/github/license/risan/react-context-example.svg)](https://github.com/risan/react-context-example/blob/master/LICENSE.md)

An example of new React [context API](https://reactjs.org/docs/context.html).

Checkout and play around with the [demo here](https://risan.io/react-context-example).

![React Context Example](https://media.giphy.com/media/LTFXjANETzsimujkvQ/source.gif)

## Requirements

The following item is required in order to run this React application:

* [Node.js](https://nodejs.org) version 6 or higher

## Installation

### 1. Clone this repository

First, clone this repository to your local computer:

```shell
$ git clone git@github.com:risan/react-context-example.git
```

### 2. Install the dependencies

Next, `CD` into the project directory and install all of the required dependencies:

```shell
# Go to the project directory.
$ cd react-context-example

# Install all of the dependencies.
$ npm install

# Or install it with Yarn.
$ yarn install
```

### 3. Run the application 🎉

To run the application within the development mode, simply type the following command:

```shell
npm run start

# Or with yarn
yarn start
```

It will automatically open up a new tab on your browser and load the url at [localhost:3000](http://localhost:3000). You can play around with the code on `src` directory, the page will be reloaded automatically if you make any changes.

There are also other commands that you can use:

```shell
# Build the application that is optimized for production.
$ npm run build

# Run prettier.
$ npm run prettier
```

## React Context

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

```js
import React, { Component } from 'react';

// 1. Create the context.
const EmojiModeContext = React.createContext(false);

class App extends Component {
  state = {
    emojiMode: false
  };

  render() {
    return (
      {/* 2. Provide the context's value for children. */}
      <EmojiModeContext.Provider value={this.state.emojiMode}>
        <Header />
      </EmojiModeContext.Provider>
    );
  }
}

const Title = () => (
  {/* 3. Consume the provided context's value on childred. */}
  <EmojiModeContext.Consumer>
    {emojiMode => (
      <h1>New Context API {emojiMode ? <span role="img" aria-label="sparkles">✨</span> : null}</h1>
    )}
  </EmojiModeContext.Consumer>
);
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)
