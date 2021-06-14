import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { setLogger } from 'react-query';
import { UsersList } from '@components/UsersList';
import { data } from './usersList.mock';
import { User } from '@components/UsersList/usersList.types';
import { render } from '../../__utils__/test-utils';

beforeAll(() => {
  setLogger({
    log: console.log,
    warn: console.warn,
    error: () => undefined,
  });
});

afterEach(cleanup);

describe('list people', () => {
  it('render with correct data', async () => {
    const { getByText } = render(<UsersList filterBy='' users={data as User} />);

    expect(getByText(data[0].name)).toBeInTheDocument();
    expect(getByText('@' + data[0].username)).toBeInTheDocument();

    expect(getByText(data[1].name)).toBeInTheDocument();
    expect(getByText('@' + data[1].username)).toBeInTheDocument();

    expect(getByText(data[2].name)).toBeInTheDocument();
    expect(getByText('@' + data[2].username)).toBeInTheDocument();

  });

  it('render with empty data', async () => {
    const { getByText } = render(<UsersList filterBy='' users={[]} />);

    expect(getByText('Sorry, there are no users..')).toBeInTheDocument();
  });

  it('render with incorrect data', async () => {
    const { getByText } = render(<UsersList filterBy='' users={undefined} />);

    expect(getByText('Sorry, there are no users..')).toBeInTheDocument();
  });


  it('render data with filter', async () => {
    const { getByText } = render(<UsersList filterBy='Bret' users={data as User} />);

    expect(getByText(data[0].name)).toBeInTheDocument();
    expect(getByText(`@${data[0].username}`)).toBeInTheDocument();

    expect(screen.queryByText(data[1].name)).toBeNull();
    expect(screen.queryByText(`@${data[1].username}`)).toBeNull();

    expect(screen.queryByText(data[2].name)).toBeNull();
    expect(screen.queryByText(`@${data[2].username}`)).toBeNull();
  });
});
