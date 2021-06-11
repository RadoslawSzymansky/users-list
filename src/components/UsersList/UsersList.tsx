import { FC } from 'react';

import { UsersListWrapper, Li } from './usersList.styled';

type User = {
  id: string,
  name: string,
  username: string,
}

type Props = {
  users?: User[],
  filterBy: "",
};

const UsersList: FC<Props> = ({ users, filterBy }) => {
    const list = users || [];
    const filteredList = list.filter( ({name, username}) => `${name} ${username}`.toLowerCase().includes(filterBy.toLowerCase()))

    return (
      <UsersListWrapper>
        {
          filteredList
          .map(({ id, name, username }) => (
            <Li key={id}>{name}<span>{username}</span></Li>
          ))
        }
      </UsersListWrapper>
    )
  }
;

export default UsersList;
