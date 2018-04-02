import React from 'react';
import EmojiModeContext from './emoji-mode-context';

const Content = () => (
  <EmojiModeContext.Consumer>
    {emojiMode => (
      <article>
        <p>
          In a typical{' '}
          {emojiMode ? (
            <span role="img" aria-label="react">
              ⚛️
            </span>
          ) : (
            'React '
          )}
          application, data is passed{' '}
          {emojiMode ? (
            <span role="img" aria-label="top">
              ⬆️
            </span>
          ) : (
            'top'
          )}-{emojiMode ? (
            <span role="img" aria-label="down">
              ⬇️
            </span>
          ) : (
            'down'
          )}
          ({emojiMode ? (
            <span role="img" aria-label="parent">
              👴
            </span>
          ) : (
            'parent'
          )}{' '}
          to{' '}
          {emojiMode ? (
            <span role="img" aria-label="child">
              👶
            </span>
          ) : (
            'child'
          )}) via props, but this can be cumbersome for certain types of props
          (e.g. locale preference, UI
          {emojiMode ? (
            <span role="img" aria-label="theme">
              🎨
            </span>
          ) : (
            'theme '
          )}) that are required by many components within an application.
          Context provides a way to share values like this between components
          without having to explicitly pass a prop through every level of the{' '}
          {emojiMode ? (
            <span role="img" aria-label="tree">
              🌳
            </span>
          ) : (
            'tree'
          )}.
        </p>
      </article>
    )}
  </EmojiModeContext.Consumer>
);

export default Content;
