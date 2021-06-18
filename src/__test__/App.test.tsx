import {
  render,
} from '../__utils__/test-utils';
import { findAllByRole, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { rest } from 'msw';

import { server } from '../__mocks__/server';

describe('fetching list of the users', () => {
  test('check if all users are displayed', async () => {
    const { findAllByRole } = render(<App />);

    const usersList = await findAllByRole('listitem');

    // check the count
    expect(usersList).toHaveLength(3);

    // check the if the user names are displayed

    const allUsersNames = usersList.map( li => li.querySelector('span')?.textContent );
    expect(allUsersNames).toEqual([ '@Bret', '@Antonette', '@Samantha' ]);
  })

});

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<App />);

  await waitFor(async () => {
    const alert = await screen.findByText('There was an error');

    expect(alert).toBeInTheDocument();

  });
})

