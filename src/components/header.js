import React from 'react';
import EmojiModeContext from './emoji-mode-context';
import Menu from './menu';

const Title = () => (
  <EmojiModeContext.Consumer>
    {emojiMode => (
      <h1>
        New Context API{' '}
        {emojiMode ? (
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        ) : null}
      </h1>
    )}
  </EmojiModeContext.Consumer>
);

const Header = () => (
  <header>
    <Title />
    <Menu />
  </header>
);

export default Header;
