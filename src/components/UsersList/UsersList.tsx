import { FC } from 'react';

import { UsersListWrapper, Li, Avatar, StyledP, UserName, Address } from './usersList.styled';
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
          .map(({ id, name, username, address: { city, street, suite } }) => (
            <Li key={id}>
              <Avatar className="avatar">
                  {name[0]}
              </Avatar>
              <div>
                <div>
                  {name}
                  <UserName>@{username}</UserName>
                </div>
                <Address>
                  {`${city}, ${street}, ${suite}`}
                </Address>
              </div>
            </Li>
          ))
      }
      {!filteredList.length ? <StyledP>Sorry, there are no users..</StyledP> : null }
    </UsersListWrapper>
  );
};

export default UsersList;
