import React, { Component } from 'react';
import EmojiModeContext from './components/emoji-mode-context';
import Header from './components/header';
import Content from './components/content';

class App extends Component {
  state = {
    emojiMode: false
  };

  render() {
    return (
      <div>
        <div className="emoji-toggle-container">
          <label className="emoji-toggle-label">
            <input
              type="checkbox"
              checked={this.state.emojiMode}
              onChange={e => this.setState({ emojiMode: e.target.checked })}
            />{' '}
            Enable Emoji Mode
          </label>
        </div>
        <EmojiModeContext.Provider value={this.state.emojiMode}>
          <Header />
          <Content />
        </EmojiModeContext.Provider>
      </div>
    );
  }
}

export default App;
