import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Title from './Title';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can show title', () => {
  // Testuje pierwsze renderowanie i metodę cyklu życia "componentDidMount"
  act(() => {
    ReactDOM.render(<Title>Hello world</Title>, container);
  });

  const title = document.querySelector('h1');

  expect(title.textContent).toBe('Hello world');
});
