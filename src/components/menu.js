import React from 'react';
import EmojiModeContext from './emoji-mode-context';

const MenuItem = ({ href, emoji, children }) => (
  <EmojiModeContext.Consumer>
    {emojiMode => (
      <li className="menu-list-item">
        <a href={href}>
          {children}{' '}
          {emojiMode ? (
            <span role="img" aria-label="emoji">
              {emoji}
            </span>
          ) : null}
        </a>
      </li>
    )}
  </EmojiModeContext.Consumer>
);

const Menu = () => (
  <nav className="menu">
    <ul className="menu-list">
      <MenuItem href="/" emoji="🏡">
        Home
      </MenuItem>
      <MenuItem href="https://risan.io" emoji="📚">
        Blog
      </MenuItem>
      <MenuItem href="https://github.com/risan" emoji="🤓">
        Github
      </MenuItem>
      <MenuItem href="https://instagram.com/risanbagja" emoji="📸">
        Instagram
      </MenuItem>
    </ul>
  </nav>
);

export default Menu;
