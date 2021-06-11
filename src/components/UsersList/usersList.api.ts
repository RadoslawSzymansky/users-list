import { User } from './usersList.types';
import { getData } from '../../api';
import { users } from '../../api/urls';

export const fetchUsers = async ():Promise<User[]> => {
  const { data } = await getData(users);
  return data;
};
