import React, { FC } from 'react';

import { UsersListWrapper, Li } from './usersList.styled';

type Props = {
  users: [],
};

const UsersList: FC<Props> = ({ users }) => (
  <UsersListWrapper>
    {users.map( e => (
      <Li>{e}</Li>
    ) )}
  </UsersListWrapper>
);

export default UsersList;
