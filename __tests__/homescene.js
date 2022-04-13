import React from 'React';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
// import jest from 'jest';

import App from '../Client/App.jsx';
import HomeScene from '../Client/Containers/HomeScene.jsx';
import store from '../client/store.js';

describe('Unit testing HomeScene React component', () => {
  const click = jest.fn();
  let scene;
  beforeEach(() => {
    scene = render(<HomeScene onClick={click} />);
  });

  test('Renders a form with two labels and two input fields both with an inital value of an empty string', async () => {
    expect(scene.getByText('Location:').nextSibling.nextSibling).toHaveValue('');
    expect(scene.getByText('Category:').nextSibling.nextSibling).toHaveValue('');
  });

  test('Invokes click handler function', async () => {
    const button = scene.getByText('Category:').nextSibling.nextSibling.nextSibling.nextSibling;
    const user = userEvent.setup();
    expect(click.mock.calls.length).toBe(0);
    await user.click(button);
    expect(click.mock.calls.length).toBe(1);
  });
});
