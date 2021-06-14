import { FC } from 'react';

import { UsersListWrapper, Li } from './usersList.styled';
import { User } from './usersList.types';

export type Props = {
  users?: User[],
  filterBy: '',
};

export const UsersList: FC<Props> = ({ users, filterBy }) => {
  const list = users || [];
  const filteredList = list.filter(({ name, username }) => `${name} ${username}`.toLowerCase().includes(filterBy.toLowerCase()));

  return (
    <UsersListWrapper>
      {
        filteredList
          .map(({ id, name, username }) => (
            <Li key={id}>
              {name}
              <span>@{username}</span>
            </Li>
          ))
      }

      {!filteredList.length ? <p>there are no users</p> : null }
    </UsersListWrapper>
  );
};

export default UsersList;
